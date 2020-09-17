import React from 'react';
import { useFetchImages } from '../hooks/useFetchImages';
import { GridItemImage } from './GridItemImage';

export const GridItem = ({ nameSearch }) => {

    const { data:images,loading } = useFetchImages( nameSearch );

    return(

        <>
            {
                loading && <p className="animate__animated animate__flash">Loading...</p>
            }
            <div>
                {
                    images.map(( img,i ) =>{

                        return(
                            <GridItemImage
                                key={ i }
                                {...img}
                            />
                        )

                    })
                }
            </div>
        </>

    );

}
