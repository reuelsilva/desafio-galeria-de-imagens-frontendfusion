import { useContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Context } from "../contexts/gallery-context";
import { imageProps } from "../types/image-types";

const getLoremPicsum = async (page: number) => {
    const res = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=12`);
    const json = await res.json();
    return json
}

function useImages(){ 
    const {page} = useContext(Context)
    const [images, setImages] = useState<imageProps[] | []>([])

    const data = useQuery({
        queryKey: ['images', page], 
        queryFn: () => getLoremPicsum(page),
    })

    useEffect(() => {
        if (data.isSuccess) {
            setImages(prev => [...prev, ...data.data]);
        }
    }, [data.data])
    
    return {
        ...data,
        images
    }    
}

export default useImages