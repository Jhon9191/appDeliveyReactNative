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
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        height: "100%",
        backgroundColor: "#E98000",    
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