import React, { useContext, useState } from 'react';
import {
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    Image,
    FlatList
} from "react-native"
import styles from './styles';
import { AuthContext } from '../../context/auth'
const Home = () => {

    const { user } = useContext(AuthContext)

    const [list, setList] = useState([
        { id: 1, nome: "McDonalds1", end: "Rua Francisco", logo: "https://st.depositphotos.com/1000943/2157/i/600/depositphotos_21578567-stock-photo-atom.jpg" },
        { id: 2, nome: "McDonalds2", end: "Rua Francisco", logo: "https://st.depositphotos.com/1000943/2157/i/600/depositphotos_21578567-stock-photo-atom.jpg" },
        { id: 3, nome: "McDonalds3", end: "Rua Francisco", logo: "https://st.depositphotos.com/1000943/2157/i/600/depositphotos_21578567-stock-photo-atom.jpg" },
        { id: 4, nome: "McDonalds4", end: "Rua Francisco", logo: "https://st.depositphotos.com/1000943/2157/i/600/depositphotos_21578567-stock-photo-atom.jpg" },
        { id: 5, nome: "McDonalds5", end: "Rua Francisco", logo: "https://st.depositphotos.com/1000943/2157/i/600/depositphotos_21578567-stock-photo-atom.jpg" },
    ]);

    return (
        <View style={styles.background}>
            <View style={styles.cardapido}>
                <FlatList
                    data={list}
                    keyExtractor={item => String(item.id)}
                    renderItem={({ item }) => (
                        <View style={{
                            width: "100%", justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <View style={styles.card}>
                                <Image source={{uri: item.logo}} resizeMethod='scale' style={{height:"100%", width: 110}}/>
                                <Text>oi</Text>
                            </View>
                        </View>
                    )}
                />
            </View>

        </View>
    )
}

export default Home;