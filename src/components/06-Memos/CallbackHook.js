import React, { useCallback, useEffect, useState } from 'react';
import '../layout.css';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    // const increment = () => {
    //     setCounter(counter + 1);
    // }

    const increment = useCallback(
        (num) => {
            setCounter(c => c + num);
        },
        [setCounter]);

        useEffect(() =>{ 
            //????
        },[increment]);



    return (
        <div>

            <h1>useCallback Hook: {counter} </h1>
            <hr />

            <ShowIncrement increment={increment} />

        </div>
    )
}
