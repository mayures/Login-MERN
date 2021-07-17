import axios from "axios";
import react, { useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

function LogOutBtn() {

    const {getloggedIn} = useContext(AuthContext);

    const history = useHistory();

    async function logout() {
        await axios.get("http://localhost:5000/auth/logout");
        await getloggedIn();
        history.push("/");
    }

    return <button onClick={logout}>Log Out</button>;
};

export default LogOutBtn;

