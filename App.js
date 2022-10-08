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
GoogleSignin.configure();

const WEB_CLIENT_ID = '348967126421-1h1jimmnacped0v23cihlhi8b4b5agl4.apps.googleusercontent.com';

const App = () => {
  useEffect(() => {

    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: WEB_CLIENT_ID, // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      //iosClientId: '<FROM DEVELOPER CONSOLE>',
    });

  }, [])

  return (
    <SafeAreaView>
      {/*  <Splash /> */}

      <Singup />
    </SafeAreaView>
  );
};

export default App;


