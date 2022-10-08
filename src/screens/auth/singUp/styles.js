import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
    agreeRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    agreeText: {
        color: colors.BLUE,
        marginHorizontal: 13,
    },
    textBold: {
        fontWeight: 'bold'
    },
    button: {
        marginVertical: 20
    },
    textFooter: {
        color: colors.BLUE,
        marginBottom: 50,
        textAlign: 'center'
    },
    footerLink: {
        fontWeight: 'bold'
    }
})