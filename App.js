import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Splash from './src/screens/auth/splash';
import Signin from './src/screens/auth/singIn';
import Signup from './src/screens/auth/singUp';

import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { colors } from './src/utils/colors';

const Stack = createStackNavigator();

GoogleSignin.configure();
const WEB_CLIENT_ID = '348967126421-1h1jimmnacped0v23cihlhi8b4b5agl4.apps.googleusercontent.com';

const App = () => {
  useEffect(() => {
    console.log('env===>', process.env.GOOGLE_WEB_CLIENT_ID);
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      webClientId: WEB_CLIENT_ID,
      offlineAccess: true,
    });

  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name="Signin" component={Signin} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


