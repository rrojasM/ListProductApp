import React from 'react';
import { Text, View } from 'react-native';
import { colors } from '../../../utils/colors';
import { styles } from './styles';
import HeaderSearch from '../../../components/header'
const Home = () => {

    return (
        <View style={styles.container}>
            <HeaderSearch showSearch title="Find All You Need"/>
            <Text style={{color: colors.BLACK}}>Home</Text>
        </View>
    )
}

export default React.memo(Home); 
