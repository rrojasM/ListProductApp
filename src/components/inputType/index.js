import React, { useState } from 'react';
import { Text, View, TextInput, Pressable, Image } from 'react-native';
import { styles } from './styles';

const InputType = ({ placeholder }) => {

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput placeholder={placeholder} style={styles.input} />
            </View>
        </View>
    )
}

export default InputType
