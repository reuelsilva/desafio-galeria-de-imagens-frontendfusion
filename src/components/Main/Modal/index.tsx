import React, { useContext, useEffect, useState } from "react"
import { imageProps } from "../../../types/image-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCamera, faCircleUser } from "@fortawesome/free-solid-svg-icons"
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons" 
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons"
import { storageContext } from "../../../contexts/localstorage-context"


type ModalProps = {
    image: imageProps,
    setIsModal: React.Dispatch<React.SetStateAction<boolean>>,
    isModalOpen: boolean
}

function Modal({isModalOpen, setIsModal, image }: ModalProps):JSX.Element{
    
    const {favImages, setFavImages} = useContext(storageContext)

    useEffect(() => {
        if (!localStorage.getItem("favorites")) {
            localStorage.setItem("favorites", JSON.stringify([]));
        }
    }, []);
    
    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favImages));
    }, [favImages]);

    const updateFavoriteImages = (image:imageProps) => {
        const hasIn = favImages.find(prev => prev.id == image.id)

        if(hasIn === undefined){
            setFavImages(prev => [...prev, image])
        }else{
            const updatedFavorites = favImages.filter(prev => prev.id != image.id)
            setFavImages(updatedFavorites)
        }
    }

    return(
        <div className="fixed top-0 left-0 w-screen h-screen bg-modal z-20">
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col w-[90%] sm:w-[420px] h-[400px] bg-white rounded-lg">
                <div className="rounded-t-[8px] overflow-hidden">
                    <img className="h-[280px] w-full" src={image.download_url} alt={`Imagem #${image.id}`} />
                </div>
                <div className="p-4">
                    <ul className="flex flex-col gap-2">
                        <li className="flex gap-2"><FontAwesomeIcon icon={faCircleUser} style={{color: "#000000", height:24}} /> <span>Foto de {image.author}</span></li>
                        <li className="flex gap-2"><FontAwesomeIcon icon={faCamera} style={{color: "#000000", height:24}} /> {image.width}x{image.height}</li>
                    </ul>
                    <div className="flex justify-end">
                        {
                            favImages.find(prev => prev.id == image.id)?(
                                <button onClick={() => updateFavoriteImages(image)}><FontAwesomeIcon icon={faHeartSolid} style={{color:'#e00000',height: 30}}/></button>
                            ):(
                                <button onClick={() => updateFavoriteImages(image)}><FontAwesomeIcon icon={faHeartRegular} style={{color:'#e00000',height: 30}}/></button>
                            )
                        } 
                    </div>
                </div>
                <button className="absolute top-[-10px] right-[-10px] w-8 h-8 bg-red-600 rounded-full text-white text-lg hover:bg-red-700" title='Fechar' onClick={() => setIsModal(!isModalOpen)}>X</button>
            </div>
        </div>
    )
}

export default Modal