import React from 'react';
import { FlatList, ScrollView, Text, Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { products } from '../../../data/products'
import FavoriteItem from '../../../components/favoriteItem';
import Header from '../../../components/header';

const ProductDetails = ({ navigation, route }) => {
    const { product } = route?.params || {};

    return (
        <SafeAreaView style={styles.main}>
            <ScrollView style={styles.container}>
                <Image style={styles.image} source={{ uri: product?.image }} />
                <View style={styles.content}>
                    <Text style={styles.title}>{product?.title}</Text>
                    <Text style={styles.price}>{product?.price}</Text>
                    <Text style={styles.description}>{product?.description}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default React.memo(ProductDetails); 
