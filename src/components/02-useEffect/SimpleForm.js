import React, { useEffect, useState } from 'react';
import './effects.css';
import { Message } from './message';

export const SimpleForm = () => {

    const  [formState, setformState] = useState({
        name:'',
        email:''
    });

    const{name,email} =formState;


    useEffect( () =>{
        // console.log('hey');
        return () =>{

        }
    }, []);

    useEffect( () =>{
        // console.log('formState cambio locoh!');
    }, [formState]);

    useEffect( () =>{
        // console.log('email cambio locoh!');
    }, [email]);

    const handleInputChange = ({target}) =>{
        setformState({
            ...formState,  
            [target.name]:target.value
        });
    }




    return (
        <>

        <h1>UseEffect</h1>
        <hr/>

        <div className="form-group">
            <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Tu nombre"
            autoComplete="off"
            value={name}
            onChange={ handleInputChange }>
            </input>

        </div>

        <div className="form-group">
            <input
            type="text"
            name="email"
            className="form-control"
            placeholder="example@example.com"
            autoComplete="off"
            value={email}
            onChange={ handleInputChange }>
            </input>

        </div>

        { (name ==='123')&& <Message/>}

            
        </>
    )
}
