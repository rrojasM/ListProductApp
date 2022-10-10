import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    mainContainer:{
        paddingHorizontal: 24,
        marginTop: 10
    },  
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10
    },
    title: {
        fontSize: 16,
        color: colors.BLACK,
        fontWeight: 'bold'
    },
    icon: {
        width: 32,
        height: 32
    },
    space: {
        width: 34,
    }
})