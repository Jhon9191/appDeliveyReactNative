import React, {useContext} from 'react';
import { 
    Text, 
    View, 
    SafeAreaView,
    TouchableOpacity,
    Image
 } from "react-native"
import styles from './styles';
import { AuthContext } from '../../context/auth'
const Home = () => {

const {user} = useContext(AuthContext)

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Bem vindo de volta 
            <Text style={{color: "#D64622"}}> {user.nome}</Text> {'\n'}
                bora fazer um {'\n'}
                <TouchableOpacity><Text style={styles.title}>pedido 😄?</Text></TouchableOpacity> 
                </Text>
        </SafeAreaView>
    )
}

export default Home;