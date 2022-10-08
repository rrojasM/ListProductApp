import React from 'react';
import { Text, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../../utils/colors';
import { styles } from './styles';

const Home = () => {

    return (
        <View style={styles.container}>
            <Text style={{color: colors.BLACK}}>Home</Text>
        </View>
    )
}

export default React.memo(Home); 
