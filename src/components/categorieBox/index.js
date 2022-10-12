import React, { useState } from 'react';
import { Text, View, Pressable, Image } from 'react-native';
import { colors } from '../../utils/colors';
import { styles } from './styles';

const CategorieBox = ({ title, image, onPress, isFirst, isSelected }) => {

    return (
        <View style={{ height: 105, marginTop: 15, paddingBottom: 89, paddingTop: 3, bottom: 0 }}>
            <Pressable onPress={onPress} style={[styles.container, isFirst ? { marginLeft: 24 } : {}]}>
                <View style={[styles.imageContainer, isSelected ? { backgroundColor: colors.BLACK } : {}]}>
                    <Image style={styles.image} source={{ uri: image }} />
                </View>
                <Text style={[styles.title, isSelected ? { color: colors.BLUE, fontWeight: '500' } : {}]}>{title}</Text>
            </Pressable>
        </View>
    )
}

export default React.memo(CategorieBox);