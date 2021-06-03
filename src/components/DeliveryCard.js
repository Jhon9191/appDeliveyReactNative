import React, { useContext, useEffect, useState } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    StyleSheet
} from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'
const DeliveryCard = ({ data , func}) => {
    return(
        <View style={{
            width: "100%", justifyContent: 'center',
            alignItems: 'center'
        }}>
                <View style={styles.card}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={{ uri: data.logo }}
                            resizeMethod='scale' style={{ marginStart: 5, marginEnd: 15, height: 80, width: 80, borderRadius: 50 }} />
                        <View>
                            <Text style={styles.label}>Nome: <Text style={styles.labelText}>{data.nome}</Text></Text>
                            <Text style={styles.label}>Endereço: <Text style={styles.labelText}>{data.end}</Text></Text>
                        </View>
                    </View>
                    <TouchableOpacity activeOpacity={0.6} onPress={func}>
                        <Icon name="caret-forward-outline" size={25} color="#E98000" />
                    </TouchableOpacity>
                </View>
            </View>
    )
}

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

    label:{
        fontSize: 16,
        fontWeight: 'bold',
        color: "#121212"
    },

    labelText:{
        color: "#121212",
        fontWeight: 'normal',
        fontSize: 12,
    }, 

});

export default DeliveryCard;