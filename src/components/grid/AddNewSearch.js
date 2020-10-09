import React, { useState } from 'react';
import '../../styles/components/AddNewSearch.css';

export const AddNewSearch = ( { setSearch } ) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange=(e)=>{

        setInputValue( e.target.value );
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setSearch( search => [ inputValue, ...search] );
            setInputValue('');
        }

    }

    return (
        <form onSubmit={ handleSubmit } >
            
            <div className="input-group">
                    <input
                        className="form-control search"
                        type="text"
                        value={ inputValue }
                        placeholder="Ingrese palabra a buscar"
                        onChange={ (e)=> handleInputChange(e) }
                    />
                    <div className="input-group-append">
                        <button className="icon-search fa fa-search fa-2x" type= "submit" />
                    </div>
            </div>
            
        </form>
    )
}
