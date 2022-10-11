import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
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
    title: {
        color: colors.BLUE,
        fontSize: 18,
        fontWeight: 'bold',

    },
    subTitle: {
        color: colors.GREY,
        marginTop: 6,
        fontSize: 12
    },
    arrow: {
        width: 32,
        height: 32
    }
});