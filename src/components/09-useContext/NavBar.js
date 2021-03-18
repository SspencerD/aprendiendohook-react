import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (

        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink exact activeClassName="active" to="/" className="nav-link" aria-current="page">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName="active" to="/about" className="nav-link">About</NavLink>
                        </li>
                    </ul>
                    <div className="d-flex">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink exact activeClassName="active" to="/login" className="nav-link">Login</NavLink>
                        </li>
                        </ul>
                    </div>
                </div>
        </nav>


    )
}
