import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    image: {
        width: width,
        height: height * 0.45
    },
    list: {

    },
    pagination: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        bottom: 50,
        alignSelf: 'center',
        margin: 5
    },
    paginationLine: {
        height: 4,
        width: 20,
        borderRadius: 10,
        backgroundColor: colors.WHITE,
        marginRight: 5
    },
    activeLine: {
        backgroundColor: colors.BLACK,
        width: 30
    }
})