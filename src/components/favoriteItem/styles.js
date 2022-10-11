import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        //marginVertical: 8,
        marginHorizontal: 24,
        paddingVertical: 16,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#AAAAAA'
    },
    title: {
        color: '#8D9BB5',
        paddingVertical: 8
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginRight: 20
    },
    price: {
        color: colors.BLACK,
        paddingBottom: 8
    },
    content: {
       flex:1 
    },
    icon: {
        width: 24,
        height: 24,
        marginLeft: 8
    }
})