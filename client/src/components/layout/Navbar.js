import './navbar.css'

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LogOutBtn from "../auth/LogOutBtn";
import AuthContext from "../../context/AuthContext";

function Navbar() {

    const { loggedIn } = useContext(AuthContext);

    return (
        <div className="navbarmain">
            <div className="homeLink">
                <Link to="/" className="linkpart">Home</Link>
            </div>
            {loggedIn === false && (
                <>
                    <div className="registerLink">
                        <Link to="/register" className="linkpart">Register</Link>
                    </div>
                    <div className="loginLink">
                        <Link to="/login" className="linkpart">Log in</Link>
                    </div>
                </>)}
            {loggedIn === true && (
                <>
                    <div className="customerLink">
                        <Link to="/customer" className="linkpart">Customers</Link>
                    </div>
                    <LogOutBtn />
                </>)}
        </div>
    );
}

export default Navbar;