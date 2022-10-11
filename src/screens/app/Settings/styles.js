import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

export const styles = StyleSheet.create({
    main: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFF'
    },
    container: {
        padding: 24,
    },
    sectionTitle: {
        color: colors.GREY,
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 16
    },
    item: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginVertical: 8
    }
})