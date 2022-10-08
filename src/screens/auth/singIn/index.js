import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Header from '../../../components/authHeader';
import Input from '../../../components/input';
import Button from '../../../components/Button';
import { styles } from './styles';
import Separetor from '../../../components/seperator';
import GoogleLogin from '../../../components/googleLogin';

const Singin = () => {
    const [checked, setChecked] = useState(false)

    const onSignIn = () => {
        console.log('PRESS SIGN IN');
    }
    return (
        <View style={styles.container}>
            <Header title="Sign In" />

            <Input placeholder="example@gmail.com" label="Email" />
            <Input isPassword placeholder="********" label="Password" />

            <Button style={styles.button} title="Sign In" />
            <Separetor text="Or sign up with" />
            <GoogleLogin />


            <Text style={styles.textFooter}>
                Don’t have an account?
                <Text onPress={onSignIn} style={styles.footerLink}>Sign Up</Text>
            </Text>

        </View>
    )
}

export default React.memo(Singin); 
