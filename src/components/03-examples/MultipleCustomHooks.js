import React from 'react'
import { useCounter } from '../../Hooks/useCounter';
import { useFetch } from '../../Hooks/useFetch';
import '../02-useEffect/effects.css';

export const MultipleCustomHooks = () => {


    const {counter,increment}= useCounter(1);

    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);


    const { author, quote } = !!data && data[0];

    return (
        <div>

            <h1>Personajes de BreakingBad</h1>
            <hr />

            { loading ? (
                <div className="alert alert-warning">
                    Cargando...
                </div>

            )
                :
                (
                    <figure className="border-aqua border-1">
                        <blockquote className="blockquote text-right">
                            <p className='mb-0'>{quote}</p>
                        </blockquote>
                        <figcaption className="blockquote-footer">
                            <p className='mb-1'>{author}</p>
                        </figcaption>
                    </figure>
                )



            }

            <button className="btn btn-outline-info" onClick={increment}> Siguiente Autor</button>



        </div>
    )
}
