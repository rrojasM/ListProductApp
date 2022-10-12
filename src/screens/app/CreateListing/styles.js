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
        fontWeight: '500',
        marginBottom: 16
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 4,
    },
    uploadContainer: {
        width: 100,
        height: 100,
        borderRadius: 8,
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
        flexWrap: 'wrap',
        paddingBottom: 16
    },
    imageContent: {
        flexDirection: 'row',
        marginTop: 8,
        marginRight: 8
    },
    delete: {
        width: 24,
        height: 24,
        marginLeft: -16,
        marginTop: -10
    },
    textArea: {
        minHeight: 150,
        paddingTop: 16,
    },
    button: {
        marginBottom: 120,
    }
})