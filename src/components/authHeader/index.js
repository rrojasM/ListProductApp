import React from 'react';
import { TouchableOpacity, Text, View, Pressable, Image } from 'react-native';
import { styles } from './styles';

const Header = ({ title, onBackPress }) => {
    return (
        <View style={styles.container}>
            <Pressable hitSlop={20} onPress={onBackPress}>
                <Image style={styles.image} source={require('../../assets/icon.png')} />
            </Pressable>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default Header;