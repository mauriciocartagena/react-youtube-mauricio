import React, { useState } from 'react'

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
            <input
                className="form-control"
                type="text"
                value={ inputValue }
                onChange={ (e)=> handleInputChange(e) }
            >
            </input>
        </form>
    )
}
