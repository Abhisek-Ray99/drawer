import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

import SplashScreen from '../screens/splash/Splash.Screen';
import RootNavigation from './RootNavigation';
import AuthNavigation from './AuthNavigation';

import { useSelector } from '../redux/store';

const AppStack = () => {
    const [hide, sethide] = useState(true);
    // const [user, setUser] = useState(null)

    const { loggedIn, usersInfo } = useSelector((state) => state.user)

    useEffect(() => {
        const initializeApp = async () => {
            try {
                // Simulate a loading delay
                setTimeout(() => {
                    sethide(false);
                }, 100);

                // const savedUser = await AsyncStorage.getItem("Users");
                // if(savedUser !== null){
                //     const currentUser = JSON.parse(savedUser);
                //     setUser(currentUser);
                // }
            } catch (error) {
                console.log(error);
            }
        };

        initializeApp();
    }, []);

    if (hide) {
        return (<SplashScreen />);
    }

    return (
        <>
            {
                loggedIn ? 
                (
                    <RootNavigation userData={usersInfo} />
                ) : (
                    <AuthNavigation/>
                )
            }
        </>
    )
}

export default AppStack

const styles = StyleSheet.create({})