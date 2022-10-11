import React from 'react';
import { Text, ScrollView, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import Header from '../../../components/header';
import ListItem from '../../../components/listItem';

const Settings = () => {
    const onItemPress = () => {
        Linking.openURL('https://google.com');
    }

    return (
        <SafeAreaView style={styles.main}>
            <Header title="Settings" />
            <ScrollView style={styles.container}>
                <Text style={styles.sectionTitle}>Help Center</Text>
                <ListItem onPress={onItemPress} style={styles.item} title="FAQ" />
                <ListItem onPress={onItemPress} style={styles.item} title="Contact Us" />
                <ListItem onPress={onItemPress} style={styles.item} title="Privacy & Terms" />
            </ScrollView>
        </SafeAreaView>
    )
}

export default React.memo(Settings); 
