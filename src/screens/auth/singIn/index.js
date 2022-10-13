import React, { useContext, useState } from 'react';
import { View, Text } from 'react-native';
import Header from '../../../components/authHeader';
import Input from '../../../components/input';
import Button from '../../../components/Button';
import { styles } from './styles';
import Separetor from '../../../components/seperator';
import GoogleLogin from '../../../components/googleLogin';
import { login } from '../../../utils/backendCalls';
import { UserContext } from '../../../../App';

const Signin = ({ navigation }) => {
    const [values, setValues] = useState({});
    const { setUser } = useContext(UserContext);

    const onChange = (key, values) => {
        setValues(v => ({ ...v, [key]: values }))
    }

    const onSignIn = async () => {
        try {
            if (!values?.email || !values?.password) {
                Alert.alert('All filds are required');
                return;
            }
            console.log('Values', values);

            const token = await login(values);
            setUser({ token });
            console.log('Token: in Login', token);
            
        } catch (error) {
            console.log(error);
        }
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

            <Input value={values.email} onChangeText={(v) => onChange('email', v)} placeholder="example@gmail.com" label="Email" />
            <Input value={values.password} onChangeText={(v) => onChange('password', v)} isPassword placeholder="********" label="Password" />

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
