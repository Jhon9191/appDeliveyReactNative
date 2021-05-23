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

const Login = () => {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [viewp,setViewp] = useState(true);

    const viewPasssworks = () => {
        setViewp(!viewp)
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
                behavior={Platform.OS === 'android' ? 'height' : 'padding'}
            >
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input}
                        placeholder="E-mail"
                        placeholderTextColor="#918f8f"
                        onChangeText={(value) => setEmail(value)}>
                    </TextInput>
                    <Icon name="eye-outline" size={25} color="#d5d5d5" />
                </View>

                <View style={styles.inputContainer}>
                    <TextInput style={styles.input}
                        placeholder="Senha"
                        placeholderTextColor="#918f8f"
                        secureTextEntry={viewp}
                        onChangeText={(value) => setSenha(value)}>
                    </TextInput>
                    <TouchableOpacity activeOpacity={0.4} onPress={()=>viewPasssworks()}>
                        <Icon name="eye-outline" size={25} color="#918f8f" />
                    </TouchableOpacity>
                </View>

                <RectButton style={styles.button} onPress={() => handleLogin()}>
                    <Text style={styles.whiteText}>Login</Text>
                </RectButton>

                <TouchableOpacity onPress={() => {}}>
                    <Text style={styles.newAccount}>Não tem conta?</Text>
                </TouchableOpacity>

            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

export default Login;