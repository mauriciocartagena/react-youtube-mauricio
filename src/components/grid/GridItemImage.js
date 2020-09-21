import React, { useState } from 'react';
import { VideoDowload } from './VideoDowload';

export const GridItemImage = ( { title, url, urlVideo} ) => {

    const [state, setState] = useState('');

    const  handleChangeValue = ( ) =>{   
        setState( urlVideo );
    }

    return (
        <div className="animate__animated animate__fadeIn">
            {   
               state && <VideoDowload url={ urlVideo } />
            }
            <hr/>
            <h2>{ title }</h2>

            <img    
                    onClick={ ()=> handleChangeValue() }
                    className="img-thumbnail"
                    name={ urlVideo } 
                    src={ url }
                    alt={ title }
            ></img>
        </div>
    )
}
