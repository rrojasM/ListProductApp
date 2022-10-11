import React, { useState } from 'react';
import { Text, View, TextInput, Pressable, Image } from 'react-native';
import { styles } from './styles';

const InputType = ({ placeholder, value, onChangeText }) => {

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput value={value} onChangeText={onChangeText} placeholder={placeholder} style={styles.input} />
            </View>
        </View>
    )
}

export default InputType
