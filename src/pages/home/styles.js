import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    card:{
        width: '90%',
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: "#fff",
        margin: 4,
        borderRadius: 15,
    },

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
        width: "90%",
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },  

    cardapido: {
        borderRadius: 30,
        margin:10,
        width: "100%",
    },

    label:{
        fontSize: 18,
        fontWeight: 'bold',
        color: "#E98000"
    },

    labelText:{
        color: "#121212",
        fontWeight: 'normal',
        fontSize: 14,
    }

});

export default styles;