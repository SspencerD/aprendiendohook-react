import React, { useMemo, useState } from 'react';
import '.././layout.css';
import { useCounter } from '../../../Hooks/useCounter';
import { procesoPesado } from '../../../Helpers/Procesopesado';

export const MemoHook = () => {

    const {counter, increment} = useCounter(18000);
    const [show, setShow] = useState(true);


    const memoProceso = useMemo(() => procesoPesado(counter) , [ counter ]);
    

    return (
        <div>
            <h1>Memoricé Con Hooks</h1>
            <hr />

            <h2>Counter: <small>{ counter }</small> </h2>


            <p> { memoProceso }</p>

            
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
