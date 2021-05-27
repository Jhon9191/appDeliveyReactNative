import React, { useState, useContext } from 'react'
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

} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Input from '../../components/Input.js';
import { RectButton } from 'react-native-gesture-handler'
import styles from './styles.js'
import { AuthContext } from '../../context/auth'
const register = () => {

    const { cadastrar } = useContext(AuthContext)

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [viewp, setViewp] = useState(false);

    const navigate = useNavigation()

    const viewPasssworks = () => {
        setViewp(!viewp)
    }

    const handleRegister = () => {
        if (email !== "" && senha !== "" && nome !== "") {
            if (senha.length < 8) {
                console.log("Sua senha precisa ter mais de 8 algarismos :(");
                return;
            }
            cadastrar(nome, email, senha)
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'android' ? 'height' : 'padding'}>

                <Image
                    style={{width: 150, height: 150, marginBottom: 15, tintColor: "#D64622"}}
                    source={{
                        uri: 'https://cdn.pixabay.com/photo/2018/03/31/13/58/hamburger-3278191_1280.png',
                    }}
                />
                {/* <Text style={styles.title}>Bem vindo ao {'\n'}
                appFood, para realizar {'\n'}
                seus pedidos na {'\n'}
                palma da mão!</Text> */}

                <Input setValue={setNome} placeholder="Name" />
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