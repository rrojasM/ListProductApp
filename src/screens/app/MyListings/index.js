import React, { useContext } from 'react';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import FavoriteItem from '../../../components/favoriteItem';
import Header from '../../../components/header';
import { ProfileContext, ServicesContext } from '../../../../App';
import { deleteService } from '../../../utils/backendCalls';

const MyListings = ({ navigation }) => {
    const { services, setServices } = useContext(ServicesContext);
    const {profile} = useContext(ProfileContext);
    const myServices = Array.isArray(services)? services?.filter(service => service?.owner === profile?._id): []

    const renderProducts = ({ item }) => {
        const onProductPress = () => {
            navigation.navigate('ProductDetails', { product: item })
        }

        const onRemove = async()=>{
            const updatedServices = await deleteService(item?._id);
            setServices(updatedServices);
        }

        return (
            <FavoriteItem onIconPress={onRemove} icon={require('../../../assets/delete.png')} onPress={onProductPress} {...item} />
        )
    }

    const goBack = () => navigation.goBack();
    return (
        <SafeAreaView style={styles.main}>
            <Header title="My Listings" showBack onBackPress={goBack} />
            <FlatList data={myServices} renderItem={renderProducts} keyExtractor={services?._id} />
        </SafeAreaView>
    )
}

export default React.memo(MyListings); 
