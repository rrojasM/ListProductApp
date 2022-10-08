import React from 'react';
import { Text, View, Pressable, Image } from 'react-native';
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

export default React.memo(Header);