import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeStack from './HomeStack';

const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" 
            component={HomeStack} 
            options={{ headerShown: false }}/>
        </Stack.Navigator>
    )
}

export default Routes
