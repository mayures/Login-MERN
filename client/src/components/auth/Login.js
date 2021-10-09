import './login.css';
import axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { getloggedIn } = useContext(AuthContext);

    const history = useHistory();

    async function login(e) {
        e.preventDefault();
        try {
            const loginData = {
                email,
                password,
            };

            await axios.post("http://localhost:5000/auth/login", loginData);
            await getloggedIn();
            history.push("/customer");

        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className='login'>
            <h1 className='heading'>Login</h1>
            <form onSubmit={login} className='loginForm'>
                <input required
                    className='logemail'
                    type="email"
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email} />
                <input required
                    className='pass'
                    type="password"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password} />
                <button className='btn' type="submit">Login</button>
            </form>
        </div>

    );
}

export default Login;