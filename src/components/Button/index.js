import React from 'react';
import { Pressable, TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

const Button = ({ title, onPress }) => {

    {/* <Pressable hitSlop={20} onPress={() => handlePress()} style={styles.container}>
            <Text>{title}</Text>
        </Pressable> */}
    return (
        <>
            <TouchableOpacity activeOpacity={0.6} onPress={onPress} style={styles.container}>
                <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
        </>
    )
}

export default Button;