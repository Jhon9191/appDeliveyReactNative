import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, createContext } from 'react';

export const AuthContext = createContext({});
import Firebase from '../services/firebase';

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

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

    const logar = async(email, senha) => {
        await Firebase.auth().signInWithEmailAndPassword(email, senha)
            .then(async (value) => {
                let uid = value.user.uid;
                await Firebase.database().ref('users').child(uid).once('value')
                    .then((snapshot) => {
                        let data = {
                            uid: uid,
                            nome: snapshot.val().nome,
                            email: value.user.email,
                            avatar: snapshot.val().avatar
                        };
                        setUser(data);
                        storageUser(data);
                    })
            })
            .catch((error) => {
                console.log(error.code);
            })
    }

    const storageUser = async(data) => {
        await AsyncStorage.setItem("Auth_user", JSON.stringify(data));
    }

    return (
        <AuthContext.Provider value={{
            signed: !!user,
            user,
            cadastrar,
            logar
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;