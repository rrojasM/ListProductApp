import React, { useState } from 'react';
import { Text, View, TextInput, Pressable, Image } from 'react-native';
import { styles } from './styles';

const Input = ({ label, placeholder, isPassword }) => {

    const [isVisible, setIsVisible] = useState(false);
    const onEyePress = () => {
        setIsVisible(!isVisible);
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputContainer}>
                <TextInput secureTextEntry={isPassword && !isVisible} placeholder={placeholder} style={styles.input} />
                {isPassword ? (
                    <Pressable onPress={onEyePress}>
                        <Image style={styles.eye} source={isVisible ? require('../../assets/eye.png') : require('../../assets/eyeIcon.png')} />
                    </Pressable>
                ) : null}
            </View>
        </View>
    )
}

export default Input
