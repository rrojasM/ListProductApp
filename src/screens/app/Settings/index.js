import React from 'react';
import { Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';

const Settings = () => {

    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <Text>Settings</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default React.memo(Settings); 
