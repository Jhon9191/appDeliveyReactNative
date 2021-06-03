import React from  'react';
import { View, Text } from "react-native"
import { useRoute, useNavigation } from '@react-navigation/native'

const Delivery = () => {
    const route = useRoute();
    const { item } = route.params;

    return(
        <View>
            <Text>{item.id}</Text>
        </View>
    )
}

export default Delivery;