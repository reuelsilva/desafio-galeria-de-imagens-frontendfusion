import { useContext, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Context } from "../contexts/gallery-context";

const getLoremPicsum = async (page: number) => {
    const res = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=12`);
    const json = await res.json();
    return json
}

function useImages(){ 
    const { images, setImages, page } = useContext(Context)

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