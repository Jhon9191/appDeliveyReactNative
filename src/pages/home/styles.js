import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    card:{
        width: '90%',
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: "#fff",
        margin: 4,
        borderRadius: 15
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

});

export default styles;