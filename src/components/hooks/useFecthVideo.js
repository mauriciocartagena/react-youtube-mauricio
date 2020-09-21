import { useEffect, useState } from "react";
import { getUrl } from "../helpers/getUrl";


export const useFecthVideo = ( url ) => {

    const [geturl, setGeturl] = useState( { 
        videoUrl:[],
        loading:true
    } );


    useEffect(() => {

        getUrl( url )
        .then(( video )=>{

            setGeturl( {
                videoUrl: video, 
                loading:false
            });
            
        }).catch(()=>{
            setGeturl( { 
                loading:true
            });
        });

    }, [url]);

    return geturl;

}
