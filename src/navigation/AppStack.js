import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'

import SplashScreen from '../screens/splash/Splash.Screen';
import RootNavigation from './RootNavigation';
import AuthNavigation from './AuthNavigation';

import { useSelector } from '../redux/store';

const AppStack = () => {
    const [hide, sethide] = useState(true);

    const { loggedIn, usersInfo } = useSelector((state) => state.user)

    useEffect(() => {
        // Simulate a loading delay
        setTimeout(() => {
            sethide(false);
        }, 1500);
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