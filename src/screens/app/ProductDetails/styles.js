import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";
const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    main: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFF',
        flex: 1
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
    },
    footer: {
        padding: 24,
        flexDirection: 'row',
        alignItems: 'center'
    },
    bookmarkContainer: {
        backgroundColor: "#DADADA",
        padding: 18,
        borderRadius: 8,
        marginRight: 16
    },
    bookmarkIcon: {
        width: 24,
        height: 24
    }
})