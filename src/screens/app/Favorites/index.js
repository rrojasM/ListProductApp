import React, { useContext } from 'react';
import { FlatList, View, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { products } from '../../../data/products'
import FavoriteItem from '../../../components/favoriteItem';
import Header from '../../../components/header';
import { ServicesContext } from '../../../../App';
import { updateService } from '../../../utils/backendCalls';

const Favorites = ({ navigation }) => {

    const { services, setServices } = useContext(ServicesContext);
    const likedServices = Array.isArray(services) ? services?.filter(service => service?.liked) : [];

    const renderProducts = ({ item }) => {
        const onProductPress = () => {
            navigation.navigate('ProductDetails', { product: item })
        }

        const onRemove = async () => {
            const updateServices = await updateService(item?._id, { liked: false });
            if (Array.isArray(updateServices)) {
                setServices(updateServices);
            }
        }

        const onIconPress = () => {
            Alert.alert('Aye you sure you want to remove this item from you favorites?', '',
                [{ text: 'Yes', onPress: onRemove }, { text: 'Cancel' }])
        }
        return (
            <FavoriteItem onPress={onProductPress} onIconPress={onIconPress} {...item} />
        )
    }

    return (
        <SafeAreaView style={styles.main}>
            <Header title="Favorites" />
            <FlatList
                data={likedServices}
                renderItem={renderProducts}
                keyExtractor={services?._id}
            />
        </SafeAreaView>
    )
}

export default React.memo(Favorites); 
