import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        gep: 10,
        justifyContent: 'center',

    },

    subContainer: {
        flex: 0.25,
        backgroundColor: '#918bff',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },

    heading: {
        fontSize: 24,
        fontWeight: '600',
        color: '#fff',
    },

    formContainer: {
        flex: 0.3,
        padding: 20,
        justifyContent: 'center',
    },

    txtfield: {
        color: '#000',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        paddingHorizontal: 15,
        height: 50,
        marginBottom: 15,

    },

    btn: {
        backgroundColor: '#918bff',
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btntxt: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    }
})

export default styles;