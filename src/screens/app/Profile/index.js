import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import Header from '../../../components/header';
import ListItem from '../../../components/listItem';
import Button from '../../../components/Button';


const Profile = ({navigation}) => {

    const num = 10;

    const onLogout = () => {
        console.log('On logout tap');
    }

    const onSettingsPress = () => {
        navigation.navigate('Settings')
    }

    const onCreateListing = () => {
        navigation.navigate('CreateListing')
    }

    return (
        <SafeAreaView style={styles.main}>
            <Header title="Profile" showLogout onLogout={onLogout} />
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.name}>Username:</Text>
                    <Text style={styles.email}>Email:</Text>

                    <ListItem title="My Listings" subTitle={`You have ${num} listings`} />
                    <ListItem onPress={onSettingsPress} title="Settings" subTitle="Account, FAQ, Contact" />
                </View>

                <Button onPress={onCreateListing} title="Add New Listing" />
            </View>
        </SafeAreaView>
    )
}

export default React.memo(Profile); 
