import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Header from '../../../components/authHeader';
import Input from '../../../components/input';
import Button from '../../../components/Button';
import { styles } from './styles';
import Separetor from '../../../components/seperator';
import GoogleLogin from '../../../components/googleLogin';

const Signin = ({ navigation }) => {

    const onSignIn = () => {
       console.log('PRESS ON SIGN');
    }
    const onSignUp = () => {
        navigation.navigate('Signup');
    }
    const onBack = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <Header onBackPress={onBack} title="Sign In" />

            <Input placeholder="example@gmail.com" label="Email" />
            <Input isPassword placeholder="********" label="Password" />

            <Button onPress={onSignIn} style={styles.button} title="Sign In" />
            <Separetor text="Or sign up with" />
            <GoogleLogin />


            <Text style={styles.textFooter}>
                Don’t have an account?
                <Text onPress={onSignUp} style={styles.footerLink}>Sign Up</Text>
            </Text>

        </View>
    )
}

export default React.memo(Signin); 
