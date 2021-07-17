import axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";


function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVerify, setPasswordVerify] = useState("");

    const { getloggedIn } = useContext(AuthContext);

    const history = useHistory();

    async function register(e) {
        e.preventDefault();
        try {
            const registerData = {
                email,
                password,
                passwordVerify
            };

            await axios.post("http://localhost:5000/auth/", registerData);
            await getloggedIn();
            history.push("/customer");

        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div>
            <h1>register a new account</h1>
            <form onSubmit={register}>
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
                <input required
                    type="password"
                    placeholder="verify your password"
                    onChange={(e) => setPasswordVerify(e.target.value)}
                    value={passwordVerify} />
                <button type="submit">register</button>
            </form>
        </div>

    );
}

export default Register;