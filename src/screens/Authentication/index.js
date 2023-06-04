import React, {useState, useEffect} from 'react';
import * as LocalAuthentication from 'expo-local-authentication';
import {Button, Alert, Text, View} from "react-native";
import styles from "./style";

/**
 * https://docs.expo.dev/versions/latest/sdk/local-authentication/#localauthenticationhashardwareasync
 * @return Promise<boolean>
 * */
const handleHasHardwareAsync = async () => {
    return await LocalAuthentication.hasHardwareAsync();
}

/**
 * https://docs.expo.dev/versions/latest/sdk/local-authentication/#localauthenticationisenrolledasync
 * @return Promise<boolean>
 * */
const handleIsEnrolledAsync = async () => {
    return await LocalAuthentication.isEnrolledAsync();
}

/**
 * Authentication Screen
 * @param props
 * */
const Authentication = ({navigation}) => {
    const [isCompatible, setIsCompatible] = useState(false);
    const [isEnrolled, setIsEnrolled] = useState(false);

    // render only once
    useEffect(() => {
        handleHasHardwareAsync().then((compatible) => {
            setIsCompatible(compatible);
        });
        handleIsEnrolledAsync().then((enrolled) => {
            setIsEnrolled(enrolled);
        })
    }, []);

    const onFaceId = async () => {
        try {
            if (!isCompatible) {
                throw new Error('Your device isn\'t compatible.')
            }

            if (!isEnrolled) {
                throw new Error('No Faces / Fingers found.')
            }

            // Authenticate user
            await LocalAuthentication.authenticateAsync().then((value) => {
                if(value.success) {
                    navigation.navigate('ToDo');
                } else {
                    if(value.error === 'user_cancel') {
                        Alert.alert('Authentication Cancelled');
                    } else {
                        Alert.alert('An error occured', value.error);
                    }
                }
            });
        } catch (error) {
            Alert.alert('An error occured', error?.message);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to "To Do List"</Text>
            <Button title="Sign in" onPress={onFaceId}/>
        </View>
    );
}

export default Authentication;