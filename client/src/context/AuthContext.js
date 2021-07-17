import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

function AuthContextProvider(props) {
    const [loggedIn, setloggedIn] = useState(undefined);

    async function getloggedIn() {
        const loggedInRes = await axios.get("http://localhost:5000/auth/loggedIn");
        setloggedIn(loggedInRes.data);
    }

    useEffect(()=>{
        getloggedIn();
    },[]);

    return <AuthContext.Provider value={{loggedIn, getloggedIn}}>
        {props.children}
    </AuthContext.Provider>;
}

export {AuthContextProvider};
export default AuthContext;
