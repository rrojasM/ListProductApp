import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 54
    },
    image: {
        width: 20,
        height: 20
    },
    title: {
        fontSize: 26,
        fontWeight: '500',
        color: colors.BLUE,
        paddingHorizontal: 16
    }

})