import React, { useState } from 'react'
import {
    View,
    SafeAreaView,
    Text,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    Alert,
    TouchableOpacity
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Input from '../../components/Input.js';
import { RectButton } from 'react-native-gesture-handler'
import styles from './styles.js'
const register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [viewp, setViewp] = useState(false);

    const navigate = useNavigation()

    const viewPasssworks = () => {
        setViewp(!viewp)
    }

    const handleRegister = () => {
        if (email !== "" && senha !== "" && senha !== "") {
            if (senha.length < 8) {
                console.log("Sua senha precisa ter mais de 8 algarismos :(");
                return;
            }
            console.log(`Cadastrado com suceso 
            nome: ${name}
            email: ${email}
            senha: ${senha}`);
        }
    }

    return (
        <SafeAreaView style={styles.container}>

            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'android' ? 'height' : 'padding'}>

                <Text style={styles.title}>Bem vindo ao {'\n'}
                appFood, para realizar {'\n'}
                seus pedidos na {'\n'}
                palma da mão!</Text>

                <Input setValue={setName} placeholder="Name" />
                <Input setValue={setEmail} placeholder="E-mail" />
                <Input setValue={setSenha}
                    placeholder="Password"
                    secure={viewp}
                    icon={viewp == false ? "eye-outline" : "eye-off-outline"}
                    func={viewPasssworks} />

                <RectButton style={styles.button} onPress={() => handleRegister()}>
                    <Text style={styles.whiteText}>Cadastrar</Text>
                </RectButton>

                <TouchableOpacity onPress={() => navigate.navigate("Login")}>
                    <Text style={styles.newAccount}>Já possui uma conta?</Text>
                </TouchableOpacity>

            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default register;