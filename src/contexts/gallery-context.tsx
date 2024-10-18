import React, { createContext, useState } from "react";
import { imageProps } from "../types/image-types";

interface ContextProps{
    page: number, 
    setPage: React.Dispatch<React.SetStateAction<number>>,
    images: imageProps[],
    setImages: React.Dispatch<React.SetStateAction<imageProps[] | []>>
}

type ContextProviderProps = {
    children: React.ReactNode;
};

export const Context = createContext<ContextProps>({
    page: 0, 
    setPage: () => {}, 
    images: [],
    setImages: () => {}
});

function ContextProvider({children}: ContextProviderProps){
    const [page, setPage] = useState<number>(1);
    const [images, setImages] = useState<imageProps[] | []>([]);

    return(
        <Context.Provider value={{page, setPage, images, setImages}}>
            {children}
        </Context.Provider>   
    )
}

export default ContextProvider;