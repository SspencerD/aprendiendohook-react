import React, { useContext } from 'react';
import { MainApp } from './MainApp';
import { UserContext } from './UserContext';


export const LoginPage = () => {


    const {setUser} = useContext(UserContext);


    return (
        <div>
             <h1>Login</h1>
            <hr/>
            <button
            className="btn btn btn-outline-primary"
            onClick={() => setUser( {id:123,
                name:'Santiago',
                lastname:'Spencer',
                email: 'sspencer@recneps.cl'})
             }
            >
                Login

            </button>
            
        </div>
    )
}
