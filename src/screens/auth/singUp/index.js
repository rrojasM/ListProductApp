import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Header from '../../../components/authHeader';
import CheckBox from '../../../components/checkBox';
import Input from '../../../components/input';
import Button from '../../../components/Button';
import { styles } from './styles';
import Separetor from '../../../components/seperator';

const Singup = () => {
    const [checked, setChecked] = useState(false)
    return (
        <View style={styles.container}>
            <Header title="Sign Up" />

            <Input placeholder="John Smith" label="Name" />
            <Input placeholder="example@gmail.com" label="Email" />
            <Input isPassword placeholder="********" label="Password" />
            <View style={styles.agreeRow}>
                <CheckBox checked={checked} onCheck={setChecked} />
                <Text style={styles.agreeText}>I agree with <Text style={styles.textBold}>Terms</Text> & <Text style={styles.textBold}>Privacy</Text></Text>
            </View>
            <Button style={styles.button} title="Sign Up" />

            <Separetor text="Or sign up with"/>

        </View>
    )
}

export default Singup; 
