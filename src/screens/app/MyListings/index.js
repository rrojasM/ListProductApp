import React from 'react';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { products } from '../../../data/products'
import FavoriteItem from '../../../components/favoriteItem';
import Header from '../../../components/header';

const MyListings = ({ navigation }) => {

    const renderProducts = ({ item }) => {
        const onProductPress = () => {
            navigation.navigate('ProductDetails', { product: item })
        }
        return (
            <FavoriteItem icon={require('../../../assets/delete.png')} onPress={onProductPress} {...item} />
        )
    }

    const goBack = () => navigation.goBack();
    return (
        <SafeAreaView style={styles.main}>
            <Header title="My Listings" showBack onBackPress={goBack} />
            <FlatList data={products} renderItem={renderProducts} keyExtractor={(item) => String(item?.id)} />
        </SafeAreaView>
    )
}

export default React.memo(MyListings); 
