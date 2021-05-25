import React, { useState, createContext, Children } from 'react';

export const AuthContext = createContext({});

const AuthProvider = ( {children} ) => {

    const [ user, setUser ] = useState({name: "joao"});

    return(
        <AuthContext.Provider value={{ 
            user
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;