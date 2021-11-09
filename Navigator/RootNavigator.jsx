import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Signup from '../Components/SignUp';
import FlatListEg from '../Components/FlatListEg';
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"

const Stack = createStackNavigator()

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="SignUp Form"
                    component={Signup}


                />
                <Stack.Screen name="FlatList Example" component={FlatListEg} />



            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigator;

const styles = StyleSheet.create({

});
