import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container:{
        top: 26
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: colors.GREY,
        borderRadius: 14,
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        paddingHorizontal: 16,
        //paddingVertical: 20,
        paddingVertical: 10,
        //flex: 1
        paddingTop: 10
    },
})