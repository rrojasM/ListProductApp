import React, { useState } from 'react';
import { Text, View, Pressable, Image } from 'react-native';
import Input from '../input'
import { styles } from './styles';

const CategorieBox = ({ title, image, onPress }) => {

    return (
        <Pressable onPress={onPress} style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri: image}} />
            </View>
            <Text style={styles.title}>{title}</Text>
        </Pressable>
    )
}

export default React.memo(CategorieBox);