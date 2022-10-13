import React from 'react';
import { Text, Image, View, Pressable } from 'react-native';
import Button from '../../../components/Button';
import { styles } from './styles';

const Splash = ({ navigation }) => {

    const onSignUp = () => {
        navigation.navigate('Signup');
    }

    const onSignIn = () => {
        navigation.navigate('Signin');
    }

    return (
        <View style={styles.container}>
            <Image resizeMode='contain' style={styles.image} source={require('../../../assets/splashImg.png')} />

            <View style={styles.titleContainer}>
                <Text style={styles.title}>You'll Find</Text>
                <Text style={[styles.title, styles.innerTitle]}>All you need</Text>
                <Text style={styles.title}>Here!</Text>
            </View>

            <View style={styles.main}>
                <Button onPress={onSignUp} title="Sing Up" />
            </View>

            <Pressable onPress={onSignIn} hitSlop={20}>
                <Text style={styles.footerText}>Sing In</Text>
            </Pressable>
        </View>
    )
}

export default Splash; 
