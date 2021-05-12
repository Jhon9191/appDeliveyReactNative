import React, {useState} from 'react';
import { 
    View,
    SafeAreaView,
    Text,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    Alert
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler'
import styles from './style.js'

const Login = () => { 

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const handleLogin = () => {
        if(email !== "" && senha !== ""){
            Alert.alert("Carregando")
        }
    }
    return(
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'android' ? 'padding' : 'padding'}
            >

            <TextInput style={styles.input} 
            placeholder="E-mail" 
            placeholderTextColor="#918f8f"
            onChangeText={(value)=>setEmail(value)}>  
            </TextInput>

            <TextInput style={styles.input} 
            placeholder="Senha" 
            placeholderTextColor="#918f8f"
            secureTextEntry={true}
            onChangeText={(value)=>setSenha(value)}>  
            </TextInput>

            <RectButton style={styles.button} onPress={()=>handleLogin()}>
                <Text style={styles.whiteText}>Login</Text>
            </RectButton>

            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

export default Login;