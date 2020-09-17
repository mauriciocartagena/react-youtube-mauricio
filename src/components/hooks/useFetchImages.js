import { useEffect, useState } from "react"
import { getImages } from "../helpers/getImages";

export const useFetchImages = ( nameSearch )=> {

    const [images, setImages] = useState({
        data:[],
        loading:true
    });

    useEffect(() => {
        
        getImages(nameSearch)
            .then(( img )=>{
              
                setImages({
                    data:img,
                    loading:false
                });
            })

    }, [nameSearch]);

    return images;
}
