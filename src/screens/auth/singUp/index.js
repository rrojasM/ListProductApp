import React from 'react';
import { View } from 'react-native';
import Header from '../../../components/authHeader';
import Input from '../../../components/input';
import { styles } from './styles';

const Singup = () => {
    return (
        <View style={styles.container}>
            <Header title="Sign Up"/>

            <Input placeholder="John Smith" label="Name" />
            <Input placeholder="example@gmail.com" label="Email" />
            <Input isPassword placeholder="********" label="Password" />

        </View>
    )
}

export default Singup; 
