import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20
    },
    text: {
        color: colors.BLUE,
        fontWeight: '500',
        marginHorizontal: 8
    },
    line: {
        height: 2,
        flex: 1,
        backgroundColor: colors.LINE,
    }
})