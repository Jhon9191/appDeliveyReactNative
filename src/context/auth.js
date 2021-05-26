import React, { useState, createContext, Children } from 'react';

export const AuthContext = createContext({});
import Firebase from '../services/firebase';

const AuthProvider = ( {children} ) => {

    const [ user, setUser ] = useState(null);

    const cadastrar = async (nome, email, senha) => {
        await Firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then(async (value) => {
                let uid = value.user.uid;
                await Firebase.database().ref('users').child(uid).set({
                    nome: nome,
                })
                    .then(() => {
                        let data = {
                            uid: uid,
                            nome: nome,
                            email: value.user.email, 
                            avatar: null
                        };
                        setUser(data);
                        storageUser(data);
                        setLoading(false);
                    })
            })
            .catch((error) => {
                console.log(error.code);
            })
    }

    return(
        <AuthContext.Provider value={{ 
            signed: !!user,
            user,
            cadastrar
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;