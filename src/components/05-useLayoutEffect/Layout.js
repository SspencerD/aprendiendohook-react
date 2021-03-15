import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../Hooks/useCounter';
import { useFetch } from '../../Hooks/useFetch';
import './layout.css';

export const Layout = () => {


    const { counter, increment } = useCounter(1);

    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);


    const { quote } = !!data && data[0];

    const pTag = useRef();

    const [boxSize, setboxSize] = useState({});

    useLayoutEffect(() => {

        setboxSize(pTag.current.getBoundingClientRect());

    }, [quote]);

    return (
        <div>

            <h1>Ejemplo de Layout Effects</h1>
            <hr />



            <figure className="border-aqua border-1">
                <blockquote className="blockquote text-right">
                    <p className='mb-0'
                    ref={ pTag }>{quote}</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                    <p className='mb-1'>{ }</p>
                </figcaption>
            </figure>

            <pre>
                { JSON.stringify(boxSize,null,3) }
            </pre>






            <button className="btn btn-outline-info" onClick={increment}> Siguiente Autor</button>



        </div>
    )
}