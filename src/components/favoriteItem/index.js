import React, { useState } from 'react';
import { Text, View, Pressable, Image } from 'react-native';
import { styles } from './styles';

const FavoriteItem = ({ title, price, icon, image, onPress, onIconPress }) => {
    const BASE_URL_API = 'https://listicle.deegeehub.com/api';

    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Image style={styles.image} source={{ uri: `${BASE_URL_API}/${image?.path}` }} />
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.price}>${price}</Text>
            </View>
            <Pressable onPress={onIconPress}>
                <Image source={icon || require('../../assets/close.png')} style={styles.icon} />
            </Pressable>
        </Pressable>
    )
}

export default React.memo(FavoriteItem);