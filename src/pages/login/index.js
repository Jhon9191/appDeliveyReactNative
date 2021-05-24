import React, { useState } from 'react';
import {
    View,
    SafeAreaView,
    Text,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    Alert,
    TouchableOpacity
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler'
import styles from './style.js'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import Input from '../../components/Imput/index.js';
import Reacre from '../../components/teste.js';

const Login = () => {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [viewp,setViewp] = useState(true);
 
    const navigate = useNavigation()

    const viewPasssworks = () => {
        setViewp(!viewp)
    }

    const alert = () => {
        Alert.alert("oi")
    }

    const handleLogin = () => {
        if (email !== "" && senha !== "") {
            if(senha.length < 8){
                Alert.alert("Sua senha precisa ter mais de 8 algarismos :(");
                return;
            }
            Alert.alert("MACACO DO ZAP");
        }
    }
    return (
        <SafeAreaView style={styles.container}>

            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'android' ? 'height' : 'padding'}>

                <Reacre setValue={setEmail} placeholder="E-mail"/>
                <Reacre setValue={setSenha}
                 placeholder="Password" 
                 secure={viewp} 
                 icon="eye-outline" 
                 func={viewPasssworks}/>

                <RectButton style={styles.button} onPress={() => Alert.alert(email, `Senha ${senha}`)}>
                    <Text style={styles.whiteText}>Login</Text>
                </RectButton>

                <TouchableOpacity onPress={() => navigate.navigate("Register")}>
                    <Text style={styles.newAccount}>Não tem conta?</Text>
                </TouchableOpacity>

            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

export default Login;