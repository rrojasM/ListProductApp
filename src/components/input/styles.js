import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        marginBottom: 20
    },
    label: {
        marginBottom: 8,
        color: colors.BLUE,
        fontSize: 19,
        fontWeight: '500'
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: colors.GREY,
        borderRadius: 14

    },
    input: {
        paddingHorizontal: 16,
        paddingVertical: 20,
    }
})