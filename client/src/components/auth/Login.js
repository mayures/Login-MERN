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
        <div>
            <h1>login to your account</h1>
            <form onSubmit={login}>
                <input required
                    type="email"
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email} />
                <input required
                    type="password"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password} />
                <button type="submit">Login</button>
            </form>
        </div>

    );
}

export default Login;