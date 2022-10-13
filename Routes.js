import React, { useContext, useEffect, useState } from 'react';
import { Image } from 'react-native';
import Splash from './src/screens/auth/splash';
import Signin from './src/screens/auth/singIn';
import Signup from './src/screens/auth/singUp';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/app/Home';
import Favorites from './src/screens/app/Favorites';
import Profile from './src/screens/app/Profile';
import { colors } from './src/utils/colors';
import ProductDetails from './src/screens/app/ProductDetails';
import Settings from './src/screens/app/Settings';
import CreateListing from './src/screens/app/CreateListing';
import MyListings from './src/screens/app/MyListings';
import { UserContext } from './App';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const ProfileStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Profile' component={Profile} options={{ headerShown: false }} />
            <Stack.Screen name='Settings' component={Settings} options={{ headerShown: false }} />
            <Stack.Screen name='CreateListing' component={CreateListing} options={{ headerShown: false }} />
            <Stack.Screen name='MyListings' component={MyListings} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

function Tabs() {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let icon;

                if (route.name === "Home") {
                    icon = focused
                        ? require('./src/assets/tabs/home_active.png')
                        : require('./src/assets/tabs/home.png');
                } else if (route.name === "ProfileStack") {
                    icon = focused
                        ? require('./src/assets/tabs/profile_active.png')
                        : require('./src/assets/tabs/profile.png');
                } else if (route.name === "Favorites") {
                    icon = focused
                        ? require('./src/assets/tabs/bookmark_active.png')
                        : require('./src/assets/tabs/bookmark.png');
                }

                return <Image style={{ width: 24, height: 24 }} source={icon} />
            },
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: { borderTopColor: colors.WHITE },
        })}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Favorites" component={Favorites} />
            <Tab.Screen name="ProfileStack" component={ProfileStack} />
        </Tab.Navigator>
    )
}


const Routes = () => {
    const { user, setUser } = useContext(UserContext);

    useEffect(() => {
        (async () => {
            const token = await AsyncStorage.getItem('auth_token');
            setUser({ token });
        })()
    }, [])


    return (
        <NavigationContainer>
            <Stack.Navigator>
                {user?.token ? (
                    <>
                        <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
                        <Stack.Screen name="ProductDetails" component={ProductDetails} options={{ headerShown: false }} />

                    </>
                ) : (
                    <>
                        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
                        <Stack.Screen name="Signin" component={Signin} options={{ headerShown: false }} />
                        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default React.memo(Routes);


