import React from  'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/register';

const Stack = createStackNavigator();

const AppRoutes = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}

export default AppRoutes;