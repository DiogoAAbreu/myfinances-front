import { useState, createContext, useEffect } from "react";

const AuthContext = createContext({});

export default function AuthProvider({ children }) {
    const [token, setToken] = useState(JSON.parse(localStorage.getItem('userToken')));

    useEffect(() => {
        localStorage.setItem('userToken', JSON.stringify(token))
    }, [token])

    return (
        <AuthContext.Provider value={{ token, setToken }}>
            {children}
        </AuthContext.Provider>
    );
}