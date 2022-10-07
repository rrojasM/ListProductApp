import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        padding: 24,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor:'#FFF'
    },
    image: {
        width: '100%',
        height: 200
    },
    titleContainer: {
        marginVertical: 54
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#303030',
        textAlign: 'center'
    },
    innerTitle: {
        color: '#FCA34D',
        textDecorationLine: 'underline',
        fontSize: 40,
        fontWeight: 'bold'
    },
    footerText: {
        color: '#4F63AC',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 30
    }
})