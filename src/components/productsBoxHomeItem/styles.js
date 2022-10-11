import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        margin: 8,
    },
    title: {
        color: '#8D9BB5',
        paddingVertical: 10
    },
    image: {
        width: (width - 64) / 2,
        height: 220,
        borderRadius: 8
    },
    price: {
        color: colors.BLACK,
        paddingBottom: 8
    }
})