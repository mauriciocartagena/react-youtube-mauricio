import React from 'react';
import ReactLoading from 'react-loading';
import '../../styles/components/utils/Loading.css'

export const Loading = ( { type, color, name } ) => {
    return (
        <div className="row justify-content-center h-100 loading">
            <div className="col-sm-8 align-self-center text-center">
                      <div className="col-sm-4 align-self-center text-center container-fluid">
                        <ReactLoading type={type} color={color} height={100} width={100} />
                        <h2>{ name }</h2>
                    </div>    
                
            </div>
        
    </div>  
        
    )
}
