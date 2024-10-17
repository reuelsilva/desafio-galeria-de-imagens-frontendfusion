import React, { useState } from "react";
import { createContext } from "react";
import { imageProps } from "../types/image-types";

interface storageContextProps{
    favImages: imageProps[] | [],
    setFavImages: React.Dispatch<React.SetStateAction<[] | imageProps[]>>
}

export const storageContext = createContext<storageContextProps>({
    favImages: [],
    setFavImages: () => {}
})

type storageProviderProps = {
    children: React.ReactNode
}

function StorageProvider({children}:storageProviderProps){
    const [favImages, setFavImages] = useState<imageProps[] | []>(() => {
        const storedFavorites = localStorage.getItem("favorites")
        return storedFavorites ? JSON.parse(storedFavorites) : []
    })

    return(
        <storageContext.Provider value={{favImages, setFavImages}}>
            {children}
        </storageContext.Provider>
    )
}

export default StorageProvider