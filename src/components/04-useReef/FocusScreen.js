import React, { useRef } from 'react'
import '../02-useEffect/effects.css';

//Para mantener una referencia mutable 
export const FocusScreen = () => {

    const inputRef = useRef();
    

    const handleClick =()=>{
        inputRef.current.select();
    }
    return (
        <div>
            <h1>Enfocar Pantalla</h1>
            <hr/>

            <input
            ref={ inputRef }
            className="form-control"
            placeholder="Su Nombre"/>

            <button 
            className="btn btn-outline-primary mt-5"
            onClick={ handleClick }>
                Enfocar
            </button>
            
        </div>
    )
}
