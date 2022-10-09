import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        marginHorizontal: 8,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: '#8D9BB5',
    },
    image: {
        width: 24,
        height: 24,
    },
    imageContainer: {
        backgroundColor: '#DADADA',
        padding: 16,
        borderRadius: 8,
        marginBottom: 8,
    }
})