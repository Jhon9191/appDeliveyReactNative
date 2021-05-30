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
import Icon from 'react-native-vector-icons/Ionicons'
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
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Image source={{ uri: item.logo }}
                                        resizeMethod='scale' style={{ marginStart: 5, marginEnd: 15, height: 80, width: 80, borderRadius: 50 }} />
                                    <View>
                                        <Text style={styles.label}>Nome: <Text style={styles.labelText}>{item.nome}</Text></Text>
                                        <Text style={styles.label}>Endereço: <Text style={styles.labelText}>{item.end}</Text></Text>
                                    </View>
                                </View>
                                <TouchableOpacity activeOpacity={0.6}>
                                    <Icon name="caret-forward-outline" size={25} color="#E98000" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                />
            </View>

        </View>
    )
}

export default Home;