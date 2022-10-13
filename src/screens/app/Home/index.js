import React, { useContext, useEffect, useState } from 'react';
import { ScrollView, FlatList, View } from 'react-native'
import { styles } from './styles';
import HeaderSearch from '../../../components/header';
import CategorieBox from '../../../components/categorieBox';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProductsBoxHomeItem from '../../../components/productsBoxHomeItem';
import { categories } from '../../../data/categories';
import { products } from '../../../data/products';
import { getServices } from '../../../utils/backendCalls';
import { ServicesContext } from '../../../../App';

const Home = ({ navigation }) => {
    const [selectedCategory, setSelectedCategory] = useState();
    const [keyword, setKeyword] = useState()
    const [filterProducts, setFilterProducts] = useState(services);
    const { services, setServices } = useContext(ServicesContext)

    useEffect(() => {
        (async () => {
            const data = await getServices();
            setServices(data);
        })()
    }, [])

    useEffect(() => {
        if (selectedCategory && !keyword) {
            const updatedProducts = services.filter((product) => String(product?.category) === String(selectedCategory));
            setFilterProducts(updatedProducts);
        } else if (selectedCategory && keyword) {
            const updatedProducts = services.filter((product) => String(product?.category) === (selectedCategory) && product?.title?.toLowerCase().includes(keyword?.toLowerCase()));
            setFilterProducts(updatedProducts)
        } else if (!selectedCategory && keyword) {
            const updatedProducts = services.filter((product) => product?.title?.toLowerCase().includes(keyword?.toLowerCase()));
            setFilterProducts(updatedProducts)
        } else if (!keyword && !selectedCategory) {
            setFilterProducts(services)
        }
    }, [selectedCategory, keyword])



    const renderCategorie = ({ item, index }) => {
        return (
            <CategorieBox
                onPress={() => setSelectedCategory(item?.id)}
                isSelected={item?.id === selectedCategory}
                isFirst={index === 0}
                title={item?.title}
                image={item?.image}
            />
        )
    }

    const renderProduct = ({ item }) => {

        const onProductPress = (product) => {
            navigation.navigate('ProductDetails', { product })
        }

        return (
            <ProductsBoxHomeItem onPress={() => onProductPress(item)} {...item} />
        )
    }

    return (
        <SafeAreaView style={styles.main}>
            <HeaderSearch showSearch onSearch={setKeyword} keyword={keyword} title="Find All You Need" />
            <FlatList
                showsHorizontalScrollIndicator={false}
                style={styles.list}
                horizontal
                data={categories}
                renderItem={renderCategorie}
                keyExtractor={(item, index) => String(index)}
            />
            <FlatList
                style={styles.productsList}
                numColumns={2}
                data={filterProducts}
                renderItem={renderProduct}
                keyExtractor={services?._id}
                ListFooterComponent={<View style={{ height: 200 }} />}
            />
        </SafeAreaView>
    )
}
export default React.memo(Home); 