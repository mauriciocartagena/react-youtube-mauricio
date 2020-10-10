import React from 'react';
import { useFecthVideo } from '../hooks/useFecthVideo';
import { Loading } from '../utils/Loading';
import '../../styles/components/VideoDowload.css';

export const VideoDowload = ( {  url } ) => {

    const { videoUrl,loading } = useFecthVideo( url );

    return (

        <>
        {
            loading && <Loading  
                            type ={ 'spin' } 
                            color={ '#95ca3e' }  
                            name={'Loading'}
                        />
        }
            <div className="container-fluid player">
                {
                    videoUrl.map((video,i)=>{
                        return (
                            <div  key={ i } className="animate__animated animate__zoomInDown">
                                <video controls autoPlay className="video" >
                                    <source src={ video.url } type="video/mp4"></source>
                                    <source src= { video.url } type="video/ogg" />
                                </video>
                            </div>
                        );
                    })
                }
            </div>
        </>
    )
}
