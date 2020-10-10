import React, {  useState } from 'react';
import { VideoDowload } from './VideoDowload';
import '../../styles/components/GridItemImage.css';

export const GridItemImage = ( { title, url, urlVideo} ) => {

    const [ state, setState ] = useState('');
    

    const  handleChangeValue = ( ) =>{   
        setState( urlVideo );
    };


    

    return (
        <>
            <div className="animate__animated animate__fadeIn">
                {   
                state && <VideoDowload url={ urlVideo } />
                }
                <hr/>
                
                <h3>{ title }</h3>
                <img    
                        onClick={ ()=> handleChangeValue() }
                        className="img-fluid"
                        name={ urlVideo } 
                        src={ url }
                        alt={ title }
                ></img>
            </div>
            <button
                className="selectVideo"
                onClick={ ()=> handleChangeValue() }
                name={ urlVideo } 
                src={ url }
                alt={ title }
            >
                Seleccionar
            </button>
        </>
    )
}
