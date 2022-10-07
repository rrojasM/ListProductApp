import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Splash from './src/screens/auth/splash';

const App = () => {

  const [theme, setTheme] = useState('light')

  return (
    <SafeAreaView>
      <Splash />
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


