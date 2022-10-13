import React, { useContext } from 'react';
import { ScrollView, Text, Image, View, Pressable, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import ButtonSeller from '../../../components/ButtonSeller';
import ImageCarousel from '../../../components/imageCarousel';
import { updateService } from '../../../utils/backendCalls';
import { ServicesContext } from '../../../../App';

const ProductDetails = ({ navigation, route }) => {
    const params = route?.params || {};
    const { services, setServices } = useContext(ServicesContext);
    const product = services?.find(service => service?._id === params?.product?._id)
    const BASE_URL_API = 'https://listicle.deegeehub.com/api';

    const onBackPress = () => {
        navigation.goBack();
    }

    const onContact = () => {
        const phone = '2382223892';
        Linking.openURL(`tel:${phone}`);

        const email = 'gufi21@outlook.com';
        Linking.openURL(`mailto:${email}`)
    }

    const onBookmark = async () => {
        const data = await updateService(product?._id, { liked: true });
        setServices(data);
    }

    return (
        <SafeAreaView style={styles.main}>
            <ScrollView style={styles.container}>
                {product?.images?.length ? (
                    <ImageCarousel images={`${BASE_URL_API}/${product?.image?.path}`} />
                ) : (
                    <Image style={styles.image} source={{ uri: `${BASE_URL_API}/${product?.image?.path}` }} />
                )}

                <View style={styles.content}>
                    <Text style={styles.title}>{product?.title}</Text>
                    <Text style={styles.price}>${product?.price}</Text>
                    <Text style={styles.description}>{product?.description}</Text>
                </View>
                <Pressable onPress={onBackPress} style={styles.backContainer}>
                    <Image style={styles.backIcon} source={require('../../../assets/back.png')} />
                </Pressable>
            </ScrollView>
            <View style={styles.footer}>
                <Pressable onPress={onBookmark} style={styles.bookmarkContainer}>
                    <Image style={styles.bookmarkIcon} source={product?.liked ? require('../../../assets/bookmark_filled.png') : require('../../../assets/bookmark_blue.png')} />
                </Pressable>
                <ButtonSeller onPress={onContact} title="Contact Seller" />
            </View>
        </SafeAreaView>
    )
}

export default React.memo(ProductDetails); 
