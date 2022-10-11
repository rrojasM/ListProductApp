import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";
const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    main: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFF'
    },
    container: {

    },
    image: {
        width: '100%',
        height: height * 0.45,
    },
    content: {
        backgroundColor: colors.WHITE,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        marginTop: -40,
        paddingHorizontal: 24
    },
    title: {
        marginTop: 40,
        fontSize: 24,
        fontWeight: '500',
        color: colors.BLACK
    },
    price: {
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 8,
        color: colors.BLACK
    },
    description: {
        color: '#606060',
        fontWeight: '300',
        textAlign: 'justify',
        fontSize: 16,
        marginVertical: 8
    }

})