import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

export const styles = StyleSheet.create({
    main: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFF',
        flex: 1
    },
    container: {
        padding: 24,
        flex: 1
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.BLACK,
        marginBottom: 12
    },
    email: {
        fontSize: 16,
        fontWeight: '100',
        color: colors.GREY,
        marginBottom: 16
    },
    content:{
        flex:1
    }
})