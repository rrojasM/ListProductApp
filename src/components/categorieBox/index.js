import React, { useState } from 'react';
import { Text, View, Pressable, Image } from 'react-native';
import { styles } from './styles';

const CategorieBox = ({ title, image, onPress, isFirst }) => {

    return (
        <View style={{height: 150, marginTop: 10}}>
            <Pressable onPress={onPress} style={[styles.container, isFirst ? { marginLeft: 24 } : {}]}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{ uri: image }} />
                </View>
                <Text style={styles.title}>{title}</Text>
            </Pressable>
        </View>
    )
}

export default React.memo(CategorieBox);