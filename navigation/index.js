import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import * as React from 'react';

import HomeScreen from '../screens/HomeScreen';
import AnimeContentInfo from '../components/animeContentInfo';

export default function navigation() {
    
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="AnimeContent" component={AnimeContentInfo} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}