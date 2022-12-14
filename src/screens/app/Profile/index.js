import React, { useContext, useEffect } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import Header from '../../../components/header';
import ListItem from '../../../components/listItem';
import Button from '../../../components/Button';
import { getProfile } from '../../../utils/backendCalls';
import { ProfileContext } from '../../../../App';


const Profile = ({ navigation }) => {
    const num = 10;
    const { profile, setProfile } = useContext(ProfileContext);


    useEffect(() => {
        (async () => {
            const data = await getProfile();
            setProfile(data);
        })()
    }, [])


    const onLogout = () => {
        console.log('On logout tap');
    }

    const onSettingsPress = () => {
        navigation.navigate('Settings')
    }

    const onCreateListing = () => {
        navigation.navigate('CreateListing')
    }

    const onMyListingsPress = () => {
        navigation.navigate('MyListings')
    }

    return (
        <SafeAreaView style={styles.main}>
            <Header title="Profile" showLogout onLogout={onLogout} />
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.name}>{profile?.fullName}</Text>
                    <Text style={styles.email}>{profile?.email}</Text>

                    <ListItem onPress={onMyListingsPress} title="My Listings" subTitle={`You have ${num} listings`} />
                    <ListItem onPress={onSettingsPress} title="Settings" subTitle="Account, FAQ, Contact" />
                </View>

                <Button onPress={onCreateListing} title="Add New Listing" />
            </View>
        </SafeAreaView>
    )
}

export default React.memo(Profile); 
