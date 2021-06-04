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
import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '../../context/auth'
import Icon from 'react-native-vector-icons/Ionicons'
import DeliveryCard from '../../components/DeliveryCard';
const Home = () => {

    const navigate = useNavigation();
    const { user } = useContext(AuthContext)
    const [search, setSearch] = useState("");
    const [list, setList] = useState([
        { id: 1, nome: "Twin", end: "Rua Francisco", logo: "https://st.depositphotos.com/1000943/2157/i/600/depositphotos_21578567-stock-photo-atom.jpg" },
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
    const [second, setSecond] = useState([]);
    const [msg, setMsg] = useState(false);

    useEffect(() => {
        if (search == "") {
            setSecond([]);
        }

        const data = list.filter(item => {
            return item.nome.toLowerCase().includes(search.toLowerCase());
        })
        if (data.length > 0) {
            setMsg(false)
        } else {
            setMsg(true)
        }

    }, [search])

    useEffect(() => {
        searchDelivery();
        if (search == "") {
            setSecond([]);
        }
    }, [search])

    const searchDelivery = () => {
        setSecond(list.filter(item => {
            return item.nome.toLowerCase().includes(search.toLowerCase());
        }));
    }

    const navigateToDelivery = (item) => {
        navigate.navigate("Delivery", { item })
    }

    return (
        <SafeAreaView style={styles.background}>

            <View style={{ heigh: "20%", width: "100%", alignItems: 'center' }}>
                <View style={styles.input}>
                    <TextInput onChangeText={(text) => setSearch(text)} placeholder="Buscar delivery" style={{ marginStart: 15 }} />
                    <TouchableOpacity onPress={() => searchDelivery()}>
                        <Icon name="search-outline" size={25} color="#121212" style={{ marginEnd: 15 }} />
                    </TouchableOpacity>
                </View>
            </View>

            {msg == true && (
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Icon name="alert-circle-outline" size={25} color="#FFF" />
                    <Text style={styles.msg}>Nenhum resultado encontrado</Text>
                </View>
            )

            }
            {search != "" ? (
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={second}
                    keyExtractor={item => String(item.id)}
                    renderItem={({ item }) => (
                        <DeliveryCard data={item} func={() => navigateToDelivery(item)} />
                    )}
                />
            ) : (
                <FlatList
                    data={list}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => String(item.id)}
                    renderItem={({ item }) => (
                        <DeliveryCard data={item} func={() => navigateToDelivery(item)} />
                    )}
                />
            )}


        </SafeAreaView>
    )
}

export default Home;