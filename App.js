import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Singup from './src/screens/auth/singUp';
import Splash from './src/screens/auth/splash';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Singin from './src/screens/auth/singIn';
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
    <SafeAreaView>
      {/*  <Splash /> */}
      {/* <Singup /> */}

      <Singin />
    </SafeAreaView>
  );
};

export default App;


