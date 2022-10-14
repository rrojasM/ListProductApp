import React, { useContext, useState } from 'react';
import { Text, ScrollView, TouchableOpacity, Image, View, Pressable, ActivityIndicator, KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import Header from '../../../components/header';
import Input from '../../../components/input';
import { launchImageLibrary } from 'react-native-image-picker';
import { categories } from '../../../data/categories';
import Button from '../../../components/Button';
import { addServices } from '../../../utils/backendCalls';
import { ServicesContext } from '../../../../App';

const CreateListing = ({ navigation }) => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [values, setValues] = useState({});
    const { setServices } = useContext(ServicesContext)

    const goBack = () => {
        navigation.goBack();
    }

    const uploadNewImage = async () => {
        setLoading(true);
        const result = await launchImageLibrary();
        if (result?.assets.length) {
            setImages(list => ([...list, ...result?.assets]));
            setLoading(false);
        }
    }

    const onDeleteImage = (image) => {
        setImages((list) => {
            const filteredImages = list.filter(img => img?.fileName !== image?.fileName);
            return filteredImages;
        })
    }

    const onChange = (value, key) => {
        setValues((val) => ({ ...val, [key]: value }));
    }

    console.log('VALUES', values);
    const onSave = async () => {
        const img = images?.length ? images[0]: null;
        const data ={
            ...values,
            category: values.category?.id,
        };

        if(img){
            data['image'] = {
                uri: img?.uri,
                name: img?.fillName,
                type: img?.type
            }
        }

        const createService= await addServices(data);
        setServices(createService);
        setValues({});
        navigation.navigate('MyListings');
    }

    return (
        <SafeAreaView style={styles.main}>
            <Header showBack={true} onBackPress={goBack} title="Create a New listing" />

            <ScrollView style={styles.container}>
                <KeyboardAvoidingView behavior='position'>
                    <Text style={styles.sectionTitle}>Upload Photos</Text>
                    <View style={styles.imageRow}>
                        <TouchableOpacity disabled={loading} style={styles.uploadContainer} onPress={uploadNewImage}>
                            <View style={styles.uploadCircle}>
                                <Text style={styles.uploadPlus}>+</Text>
                            </View>
                        </TouchableOpacity>

                        {images?.map(image => (
                            <View key={image?.fileName} style={styles.imageContent}>
                                <Image style={styles.image} source={{ uri: image?.uri }} />
                                <Pressable hitSlop={20} onPress={() => onDeleteImage(image)}>
                                    <Image style={styles.delete} source={require('../../../assets/close.png')} />
                                </Pressable>
                            </View>
                        ))}
                        {loading ? (
                            <ActivityIndicator />
                        ) : null}
                    </View>
                    <Input
                        placeholder="Listing Title"
                        label="Title"
                        value={values.title}
                        onChangeText={(v) => onChange(v, 'title')}
                    />
                    <Input
                        placeholder="Select the category"
                        label="Category"
                        value={values.category}
                        onChangeText={(v) => onChange(v, 'category')}
                        type="picker"
                        options={categories}
                    />
                    <Input
                        placeholder="Enter Price in USD"
                        label="Price"
                        value={values.price}
                        onChangeText={(v) => onChange(v, 'price')}
                        keyboardType="numeric"
                    />
                    <Input
                        style={styles.textArea}
                        placeholder="Tell us more..."
                        label="Description"
                        value={values.description}
                        onChangeText={(v) => onChange(v, 'description')}
                        multiline
                    />
                </KeyboardAvoidingView>
                <Button onPress={onSave} title="Submit" style={styles.button} />
            </ScrollView>

        </SafeAreaView>
    )
}

export default React.memo(CreateListing); 
