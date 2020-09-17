import React, { useState } from 'react';
import { AddNewSearch } from './components/grid/AddNewSearch';
import { GridItem } from './components/grid/GridItem';
import './LayoutYoutube.css'

export const LayoutYoutube = ( { defaultSearch = [] } ) => {

    const [search, setSearch] = useState(defaultSearch);

    return (
        <div className="text-center">
           <h1>Youtube Mauricio</h1> 
            <hr/>

            <AddNewSearch setSearch={ setSearch } ></AddNewSearch>

        <ol>
            {   
                search.map(( image )=>(

                    <GridItem
                        key={ image }
                        nameSearch={ image }
                    />
                ))

            }
        </ol>
        </div>
    )
}
