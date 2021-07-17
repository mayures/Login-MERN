import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Customers from "./components/Customers/Customers";
import Clock from "./components/layout/clock";
import Navbar from "./components/layout/Navbar";
import AuthContext from "./context/AuthContext";

function Router() {

    const {loggedIn} = useContext(AuthContext);

    return (<BrowserRouter>
        <Navbar />
        <Clock />
        <Switch>
            <Route exact path="/">
                <div>Home</div>
            </Route>
            {loggedIn === false && (
                <>
                    <Route path="/register">
                        <Register />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                </>
            )}
            {loggedIn === true && (
                <>
                    <Route path="/customer">
                        <Customers/>
                    </Route>
                </>
            )}
        </Switch>
    </BrowserRouter>);
}

export default Router;
