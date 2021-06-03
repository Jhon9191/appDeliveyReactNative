import React, { useState, useContext } from 'react';
import {
    View,
    SafeAreaView,
    Text,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    Alert,
    TouchableOpacity,
    Image
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler'
import styles from './style.js'
import { useNavigation } from '@react-navigation/native'
import Input from '../../components/Input.js';
import { AuthContext } from '../../context/auth';

const Login = () => {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [viewp, setViewp] = useState(true);

    const navigate = useNavigation();
    const { logar } = useContext(AuthContext);

    const viewPasssworks = () => {
        console.log(viewp)
        setViewp(!viewp)
    }

    const handleLogin = () => {
        if (email !== "" && senha !== "") {
            if (senha.length < 8) {
                Alert.alert("Sua senha precisa ter mais de 8 algarismos :(");
                return;
            }
            logar(email, senha)
            Alert.alert("Logado com sucesso!");
        }
    }
    return (
        <SafeAreaView style={styles.container}>

            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'android' ? 'height' : 'padding'}>

                <Image
                    style={{ width: 120, height: 120, marginBottom: 15, tintColor: "#D64622" }}
                    source={{
                        uri: 'https://cdn.pixabay.com/photo/2018/03/31/13/58/hamburger-3278191_1280.png',
                    }}
                />

                <Input setValue={setEmail} placeholder="E-mail" />
                <Input setValue={setSenha}
                    placeholder="Password"
                    secure={viewp}
                    icon={viewp == false ? "eye-outline" : "eye-off-outline"}
                    func={viewPasssworks} />

                <RectButton style={styles.button} onPress={() => handleLogin()}>
                    <Text style={styles.whiteText}>Login</Text>
                </RectButton>

                <TouchableOpacity onPress={() => navigate.navigate("Register")}>
                    <Text style={styles.newAccount}>Não possui uma conta?</Text>
                </TouchableOpacity>

            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

export default Login;