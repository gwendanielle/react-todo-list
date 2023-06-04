import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import Authentication from "./src/screens/Authentication";
import ToDo from "./src/screens/ToDo";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Auth">
                <Stack.Screen name="Auth" component={Authentication}/>
                <Stack.Screen name="ToDo" component={ToDo}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
