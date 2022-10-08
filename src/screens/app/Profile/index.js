import React from 'react';
import { Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';

const Profile = () => {

    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <Text>Profile</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default React.memo(Profile); 
