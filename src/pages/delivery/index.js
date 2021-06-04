import React from  'react';
import { 
    SafeAreaView,
    View, 
    Image,
    Text 
} from "react-native"
import { useRoute, useNavigation } from '@react-navigation/native'
import styles from './styles';

const Delivery = () => {
    const route = useRoute();
    const { item } = route.params;

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
            <Image source={{ uri: item.logo }}
            resizeMethod='scale' style={{ marginStart: 5, marginEnd: 15, height: 80, width: 80, borderRadius: 50, marginTop: 15 }} />
                <View style={styles.card}>
                    <Text>{item.nome}</Text>
                </View>
            </View>
            
            <View style={styles.options}>

            </View>
        </SafeAreaView>
    )
}

export default Delivery;