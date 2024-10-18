import React, { Fragment, useContext, useState } from "react"
import { imageProps } from "../../../types/image-types"
import Modal from "../Modal"
import { storageContext } from "../../../contexts/localstorage-context"

function FavoritesView(): JSX.Element {
    const {favImages} = useContext(storageContext)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedImg, setSelectedImg] = useState<imageProps>({
        author:"", 
        download_url: "", 
        height:0, id:0, 
        url:"", 
        width:0
    })

    return (
        <div>
            {
                favImages.length > 0 ? (
                    <Fragment>
                        <div className="grid sm:grid-cols-[repeat(2,_300px)] lg:grid-cols-[repeat(3,_300px)] gap-2 justify-center">
                            {favImages.map((image:imageProps, id:number) => {
                                return (
                                    <div key={id} className="w-[300px] h-[215px] overflow-hidden rounded-lg sm:cursor-pointer transition-all hover:brightness-50" onClick={() => {
                                        setIsModalOpen(prev => !prev);
                                        setSelectedImg(image);
                                    }}>
                                        <img className="h-[215px] w-full transition-all hover:scale-125" src={image.download_url} alt={`Imagem #${image.id}`} />
                                    </div>
                                )
                            })}
                        </div>
                        {
                            isModalOpen && <Modal image={selectedImg} isModalOpen={isModalOpen} setIsModal={setIsModalOpen}/>
                        }
                    </Fragment>
                ) : (
                    <div className="flex flex-col items-center">
                        <p>Ainda não há favoritos.</p>
                    </div>
                )
            }
        </div>
    )
}

export default FavoritesView