import React from 'react';
import { useCounter } from '../../Hooks/useCounter';
import './counter.css';

export const CounterWithCustomHook = () => {

const { state:counter, increment,decrement,reset } = useCounter();






    return (
        <>

            <h1>
                Counter with Hook: {counter}
            </h1>

            <hr />


            <button className="btn btn-success"
            onClick={ increment }
            > + 1 </button>

            <button onClick={ reset } className="btn btn-primary">Reset</button>

            <button className="btn btn-danger"
            onClick={ decrement }> - 1 </button>
        </>

    )
}
