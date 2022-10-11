import React from 'react';
import { FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { products } from '../../../data/products'
import FavoriteItem from '../../../components/favoriteItem';
import Header from '../../../components/header';

const Favorites = () => {

    const renderProducts = ({ item }) => {
        return (
            <FavoriteItem {...item} />
        )
    }

    return (
        <SafeAreaView style={styles.main}>
            <Header title="Favorites" />
            <FlatList data={products} renderItem={renderProducts} keyExtractor={(item) => String(item?.id)} />
        </SafeAreaView>
    )
}

export default React.memo(Favorites); 
