import React, { useState } from 'react';
import '.././layout.css';
import { useCounter } from '../../../Hooks/useCounter';
import { Small } from './Small';

export const Memorize = () => {

    const {counter, increment} = useCounter(10);
    const [show, setShow] = useState(true);



    return (
        <div>
            <h1>Memoricé</h1>
            <hr />

            <h2>Counter: <Small value={ counter }/></h2>

            
                <button className=" btn btn-primary"
                        onClick={ increment }>
                    +1
                </button>

                <button className="btn btn-outline-success ml-3"
                        onClick={ ()=> {
                            setShow(!show);
                        }}
                >
                    Mostrar/Ocultar {JSON.stringify(show)}
                    </button>
            



        </div>
    )
}
