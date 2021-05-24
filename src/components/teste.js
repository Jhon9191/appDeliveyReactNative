import React from 'react';
import {
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
const Input = ({ children, func, setValue, icon, placeholder, secure }) => {
    return (
        <View style={styles.container}>
            <TextInput style={{marginStart: 15, width: '90%'}}
             onChangeText={(value) => setValue(value)}
             placeholder={placeholder}
             secureTextEntry={secure}
             >
            </TextInput>
            <TouchableOpacity style={{width: "10%"}} activeOpacity={0.4} onPress={func}>
                <Icon name={icon} color={icon == "" ? "#f2f3fa" : "#918f8f"} size={25} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        width: '90%',
        backgroundColor: '#f2f3fa',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 10,
        marginBottom: 8,
    }

})


export default Input;