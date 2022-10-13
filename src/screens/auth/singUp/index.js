import React, { useContext, useState } from 'react';
import { View, Text, Alert } from 'react-native';
import Header from '../../../components/authHeader';
import CheckBox from '../../../components/checkBox';
import Input from '../../../components/input';
import Button from '../../../components/Button';
import { styles } from './styles';
import Separetor from '../../../components/seperator';
import GoogleLogin from '../../../components/googleLogin';
import { request } from '../../../utils/request';
import { singUp } from '../../../utils/backendCalls';
import { UserContext } from '../../../../App';

const Signup = ({ navigation }) => {
    const { setUser } = useContext(UserContext);
    const [checked, setChecked] = useState(false);
    const [values, setValues] = useState({})

    const onSignIn = () => {
        navigation.navigate('Signin');
    }

    const onBack = () => {
        navigation.goBack();
    }

    const onChange = (key, values) => {
        setValues(v => ({ ...v, [key]: values }))
    }

    const onSignUp = async () => {

        try {
            if (!values?.fullName || !values?.email || !values?.password || !values?.confirmPassword) {
                Alert.alert('All filds are required');
                return;
            }

            if (values?.password !== values?.confirmPassword) {
                Alert.alert('Password do not march');
                return;
            }

            if (!checked) {
                Alert.alert('Please agree to the Terms');
                return;
            }

            console.log('DATA SEND IN REQUEST', values);

            const token = await singUp(values);
            setUser({token})

            console.log('RESPONSE Token:', token);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={styles.container}>
            <Header onBackPress={onBack} title="Sign Up" />

            <Input value={values.fullName} onChangeText={(v) => onChange('fullName', v)} placeholder="John Smith" label="Name" />
            <Input value={values.email} onChangeText={(v) => onChange('email', v)} placeholder="example@gmail.com" label="Email" />
            <Input value={values.password} onChangeText={(v) => onChange('password', v)} isPassword placeholder="********" label="Password" />
            <Input value={values.confirmPassword} onChangeText={(v) => onChange('confirmPassword', v)} isPassword placeholder="********" label="Confirm Password" />

            <View style={styles.agreeRow}>
                <CheckBox checked={checked} onCheck={setChecked} />
                <Text style={styles.agreeText}>I agree with <Text style={styles.textBold}>Terms</Text> & <Text style={styles.textBold}>Privacy</Text></Text>
            </View>

            <Button onPress={onSignUp} style={styles.button} title="Sign Up" />

            <Separetor text="Or sign up with" />
            <GoogleLogin />

            <Text style={styles.textFooter}>
                Already have an account?
                <Text onPress={onSignIn} style={styles.footerLink}>Sign In</Text>
            </Text>

        </View>
    )
}

export default React.memo(Signup); 
