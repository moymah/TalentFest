import React from 'react';

export default function (props) {
    
    return(
        <section>
        <input list="search" name="searchFuncionarios"></input>
        <datalist id="search">
        {props.values.map( (elem, index) => {
            return <option key={index} value={elem.name}></option>
        })}
        </datalist>
        </section>
    )

}