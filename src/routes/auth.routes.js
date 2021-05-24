import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/login';
import Register from '../pages/register';

const Stack = createStackNavigator();

const AuthRoutes = () => {
    return (
        <Stack.Navigator>

            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }} />

            <Stack.Screen
                name="Register"
                component={Register}
                options={{ headerShown: false }} />

        </Stack.Navigator>
    )
}

export default AuthRoutes;