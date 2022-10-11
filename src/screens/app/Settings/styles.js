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
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16
    },
    item: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginVertical: 8
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    icon: {
        width: 32,
        height: 32
    },
    button:{
        paddingVertical: 12,
        marginTop: 16
    }
})