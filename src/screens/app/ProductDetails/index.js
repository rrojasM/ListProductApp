import React from 'react';
import { ScrollView, Text, Image, View, Pressable, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import ButtonSeller from '../../../components/ButtonSeller';
import ImageCarousel from '../../../components/imageCarousel';

const ProductDetails = ({ navigation, route }) => {
    const { product } = route?.params || {};

    const onBackPress = () => {
        navigation.goBack();
    }

    const onContact = () => {
        const phone = '2382223892';
        Linking.openURL(`tel:${phone}`);

        const email = 'gufi21@outlook.com';
        Linking.openURL(`mailto:${email}`)
    }

    return (
        <SafeAreaView style={styles.main}>
            <ScrollView style={styles.container}>
                {product?.images?.length ? (
                    <ImageCarousel images={product?.images} />
                ) : (
                    <Image style={styles.image} source={{ uri: product?.image }} />
                )}

                <View style={styles.content}>
                    <Text style={styles.title}>{product?.title}</Text>
                    <Text style={styles.price}>{product?.price}</Text>
                    <Text style={styles.description}>{product?.description}</Text>
                </View>
                <Pressable onPress={onBackPress} style={styles.backContainer}>
                    <Image style={styles.backIcon} source={require('../../../assets/back.png')} />
                </Pressable>
            </ScrollView>
            <View style={styles.footer}>
                <Pressable style={styles.bookmarkContainer}>
                    <Image style={styles.bookmarkIcon} source={require('../../../assets/bookmark_blue.png')} />
                </Pressable>
                <ButtonSeller onPress={onContact} title="Contact Seller" />
            </View>
        </SafeAreaView>
    )
}

export default React.memo(ProductDetails); 
