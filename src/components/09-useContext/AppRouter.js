import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { AboutPage } from './AboutPage';
import { LoginPage } from './LoginPage';
import { Homepage } from './HomePage';
import { NavBar } from './NavBar';


export const AppRouter = () => {
    return (
        <Router>
            <div>

                <NavBar />
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={Homepage} />

                        <Route exact path="/about" component={AboutPage} />
                        <Route exact path="/login" component={LoginPage} />

                        <Redirect to="/" />


                    </Switch>

                </div>
            </div>

        </Router>

    )
}
