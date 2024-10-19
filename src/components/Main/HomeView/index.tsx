import React, { Fragment, useContext, useState } from "react"
import { imageProps } from "../../../types/image-types";
import { Context } from "../../../contexts/gallery-context";
import Modal from "../Modal";

function HomeView(): JSX.Element {
    const { setPage, images } = useContext(Context)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImg, setSelectedImg] = useState<imageProps>({
        author:"", 
        download_url: "", 
        height:0, id:0, 
        url:"", 
        width:0
    })

    return (
        <Fragment>
            <div className="flex flex-col items-center gap-4">
                <div className="grid sm:grid-cols-[repeat(2,_300px)] lg:grid-cols-[repeat(3,_300px)] gap-2 justify-center min-h-[2268px] sm:min-h-[1330px]">
                    {
                        images.map((image: imageProps, id: number) => {
                            return (
                                <div key={id} className="w-[300px] h-[215px] overflow-hidden rounded-lg sm:cursor-pointer transition-all hover:brightness-50" onClick={() => {
                                    setIsModalOpen(prev => !prev);
                                    setSelectedImg(image);
                                }}>
                                    <img className="h-[215px] w-full transition-all hover:scale-125" src={image.download_url} alt={`Imagem #${image.id}`}/>
                                </div>
                            )
                        })
                    }
                </div>
                <button className="bg-color-02 text-white text-sm font-medium p-2 rounded-lg cursor-pointer" onClick={() => setPage(prevPage => prevPage + 1)}>Carregar mais</button>
            </div>
            {
                isModalOpen && <Modal image={selectedImg} setIsModal={setIsModalOpen} isModalOpen={isModalOpen} />
            }
        </Fragment>
    )
}

export default HomeView