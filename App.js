import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Singup from './src/screens/auth/singUp';

import Splash from './src/screens/auth/splash';

const App = () => {

  const [theme, setTheme] = useState('light')

  return (
    <SafeAreaView>
     {/*  <Splash /> */}

      <Singup />
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  themeHeader: {
    margin: 16,
    fontSize: 16,
    backgroundColor: 'yellow'
  }
});


export default App;


