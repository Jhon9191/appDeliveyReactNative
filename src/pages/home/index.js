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
    
    const [ list, setList ] = useState([
        {id: 1, nome: "McDonalds1", end: "Rua Francisco",logo: "https://cdn.pixabay.com/photo/2015/10/20/21/05/mcdonald-998495_640.png"},
        {id: 2, nome: "McDonalds2", end: "Rua Francisco",logo: "https://cdn.pixabay.com/photo/2015/10/20/21/05/mcdonald-998495_640.png"},
        {id: 3, nome: "McDonalds3", end: "Rua Francisco",logo: "https://cdn.pixabay.com/photo/2015/10/20/21/05/mcdonald-998495_640.png"},
        {id: 4, nome: "McDonalds4", end: "Rua Francisco",logo: "https://cdn.pixabay.com/photo/2015/10/20/21/05/mcdonald-998495_640.png"},
        {id: 5, nome: "McDonalds5", end: "Rua Francisco",logo: "https://cdn.pixabay.com/photo/2015/10/20/21/05/mcdonald-998495_640.png"},
    ])
    
    return (
        <View style={styles.container}>

            
                <FlatList
                    data={list}
                    keyExtractor={(item)=>String(item.id)}
                    renderItem={({item}) => (
                    <View style={{ 
                        width: '60%',
                    backgroundColor: "#121212", margin: 15}}>
                        <Image 
                        style={{ width: 130, height: 130}}
                        source={{uri: item.logo}}/>
                        <Text>{item.nome}</Text>
                    </View>
                    )}
                />
                </View>
    )
}

export default Home;