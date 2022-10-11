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
    image: {
        width: 100,
        height: 100,
        borderRadius: 4,
        marginRight: 8,
        marginTop: 8
    },
    uploadContainer: {
        width: 100,
        height: 100,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.GREY,
        borderStyle: 'dotted',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
        marginTop: 8

    },
    uploadCircle: {
        width: 32,
        height: 32,
        borderRadius: 20,
        backgroundColor: '#DADADA',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    uploadPlus: {
        color: colors.WHITE,
        fontSize: 28,
        marginTop: -4
    },
    imageRow: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'

    }
})