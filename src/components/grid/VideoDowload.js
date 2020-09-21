import React from 'react';
import { useFecthVideo } from '../hooks/useFecthVideo';
import './videoDowload.css';

export const VideoDowload = ( {  url } ) => {

    const { videoUrl,loading } = useFecthVideo( url );

    return (

        <>
        {
            loading && <p className="animate__animated animate__flash">Loading...</p>
        }
            <div className="container-fluid">
                {
                    videoUrl.map((video,i)=>{
                        return (
                            <video controls className="video" key={ i }>
                                <source src= { video.url } type="video/mp4" />
                                <source src= { video.url } type="video/ogg" />
                            </video>
                        );
                    })
                }
            </div>
        </>
    )
}
