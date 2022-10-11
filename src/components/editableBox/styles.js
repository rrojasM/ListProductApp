import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        padding: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: colors.WHITE,
        marginVertical: 12,
        borderRadius: 4,
        marginHorizontal: 1
    },
    label: {
        color: colors.GREY,
        fontSize: 18,
        marginBottom: 6
    },
    input: {
        color: colors.BLUE,
        fontSize: 16,
        fontWeight: '500'
    }
});