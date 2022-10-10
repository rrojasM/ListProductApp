import React, { useState } from 'react';
import { Text, View, Pressable, Image } from 'react-native';
import { styles } from './styles';

const ProductItem = ({ title, price, image, onPress }) => {

    return (
        <View>
            <Pressable onPress={onPress} style={styles.container}>
                <Image style={styles.image} source={{ uri: image }} />
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.price}>{price}</Text>
            </Pressable>
        </View>

    )
}

export default React.memo(ProductItem);