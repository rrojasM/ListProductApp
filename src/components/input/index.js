import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { styles } from './styles';

const Input = ({ label, placeholder }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputContainer}>
                <TextInput placeholder={placeholder} style={styles.input} />
            </View>
        </View>
    )
}

export default Input
