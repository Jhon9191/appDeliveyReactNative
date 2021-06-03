import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    background: {
        flex: 1,
        alignItems: 'center',
        width: "100%",
        height: "100%",
        backgroundColor: "#E98000",    
    },

    input:{
        marginTop: 25,
        borderRadius: 50,
        backgroundColor: "#fff",
        width: "95%",
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },  

    cardapido: {
        borderRadius: 30,
        margin:10,
        width: "100%"
    },

    msg:{
        fontSize: 16,
        color: "#FFF"
    }

});

export default styles;