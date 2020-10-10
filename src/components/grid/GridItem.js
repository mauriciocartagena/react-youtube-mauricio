import React from 'react';
import { useFetchImages } from '../hooks/useFetchImages';
import { Loading } from '../utils/Loading';
import { GridItemImage } from './GridItemImage';

export const GridItem = ({ nameSearch }) => {

    const { data:images,loading } = useFetchImages( nameSearch );

    return(

        <>
            {
                loading && <Loading  
                                type ={ 'spin' } 
                                color={ '#95ca3e' }  
                                name={'Loading'}
                            />
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
