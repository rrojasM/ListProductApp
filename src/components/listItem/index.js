import React from 'react';
import { Text, View, Image, Pressable } from 'react-native';
import { styles } from './styles';

const ListItem = ({ title, subTitle, onPress, style }) => {
    return (
        <Pressable onPress={onPress} style={[styles.container, style]}>
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                {!!subTitle ? (
                    <Text style={styles.subTitle}>{subTitle}</Text>

                ) : null}
            </View>
            <Image style={styles.arrow} source={require('../../assets/arrow.png')} />
        </Pressable>
    )
}

export default React.memo(ListItem);