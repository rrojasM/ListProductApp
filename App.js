import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Chair from './src/Chair';
import Table from './src/Table';

const App = () => {

  const [theme, setTheme] = useState('light')

  return (
    <SafeAreaView>

      <Text style={styles.themeHeader} onPress={() => setTheme('dark')}>Make Theme Dark</Text>
      <View>
        <Chair theme={theme} />

        <Table />
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  themeHeader: {
    margin: 16, 
    fontSize: 16,
    backgroundColor:'yellow'
  }
});


export default App;


