import React, { useContext, useEffect, useState } from 'react';
import {
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    Image,
    FlatList,
    TextInput,
    ScrollView
} from "react-native"
import styles from './styles';
import { AuthContext } from '../../context/auth'
import Icon from 'react-native-vector-icons/Ionicons'
const Home = () => {

    const { user } = useContext(AuthContext)
    const [ search, setSearch ] = useState("");
    const [list, setList] = useState([
        { id: 1, nome: "1", end: "Rua Francisco", logo: "https://st.depositphotos.com/1000943/2157/i/600/depositphotos_21578567-stock-photo-atom.jpg" },
        { id: 2, nome: "2", end: "Rua Francisco", logo: "https://st.depositphotos.com/1000943/2157/i/600/depositphotos_21578567-stock-photo-atom.jpg" },
        { id: 3, nome: "3", end: "Rua Francisco", logo: "https://st.depositphotos.com/1000943/2157/i/600/depositphotos_21578567-stock-photo-atom.jpg" },
        { id: 4, nome: "4", end: "Rua Francisco", logo: "https://st.depositphotos.com/1000943/2157/i/600/depositphotos_21578567-stock-photo-atom.jpg" },
        { id: 44, nome: "44", end: "Rua Francisco", logo: "https://st.depositphotos.com/1000943/2157/i/600/depositphotos_21578567-stock-photo-atom.jpg" },
        { id: 5, nome: "5", end: "Rua Francisco", logo: "https://st.depositphotos.com/1000943/2157/i/600/depositphotos_21578567-stock-photo-atom.jpg" },
        { id: 6, nome: "6", end: "Rua Francisco", logo: "https://st.depositphotos.com/1000943/2157/i/600/depositphotos_21578567-stock-photo-atom.jpg" },
        { id: 7, nome: "7", end: "Rua Francisco", logo: "https://st.depositphotos.com/1000943/2157/i/600/depositphotos_21578567-stock-photo-atom.jpg" },
        { id: 8, nome: "8", end: "Rua Francisco", logo: "https://st.depositphotos.com/1000943/2157/i/600/depositphotos_21578567-stock-photo-atom.jpg" },
        { id: 9, nome: "9", end: "Rua Francisco", logo: "https://st.depositphotos.com/1000943/2157/i/600/depositphotos_21578567-stock-photo-atom.jpg" },
    ]);
    const [ second, setSecond ] = useState([]);

    useEffect(()=>{
        setSecond([]);
    },[search])

    const searchDelivery = ( ) => {
        setSecond(list.filter(item =>{
            return item.nome.toLowerCase().includes(search.toLowerCase());
        }));
    }

    return ( 
        <SafeAreaView style={styles.background}>

            <View style={{ heigh: "20%", width: "100%", alignItems: 'center' }}>
                <View style={styles.input}>
                    <TextInput onChangeText={(text)=>setSearch(text)} placeholder="Buscar delivery" style={{ marginStart: 15 }} />
                    <TouchableOpacity onPress={()=>searchDelivery()}>
                        <Icon name="search-outline" size={25} color="#121212" style={{ marginEnd: 15 }} />
                    </TouchableOpacity>
                </View>
            </View>

                {search != "" ? ( 
                     <FlatList
                     showsVerticalScrollIndicator={false}
                     data={second}
                     keyExtractor={item => String(item.id)}
                     renderItem={({ item }) => (
                        <View style={{
                            width: "100%", justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <View style={styles.card}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
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
                    />) : (
                <FlatList
                data={list}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => (
                    <View style={{
                        width: "100%", justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                            <View style={styles.card}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
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
                )}
        </SafeAreaView>
    )
}

export default Home;