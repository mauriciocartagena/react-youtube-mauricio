import React from 'react'

export const GridItemImage = ( { title, url} ) => {
    return (
        <div className="animate__animated animate__fadeIn">
            <h2>{ title }</h2>
            <img  className="img-thumbnail" src={ url } alt={ title }></img>
        </div>
    )
}
