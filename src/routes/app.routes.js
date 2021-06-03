import React from  'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/home';
import Delivery from '../pages/delivery';

const Stack = createStackNavigator();

const AppRoutes = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
            <Stack.Screen name="Delivery" component={Delivery} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}

export default AppRoutes;