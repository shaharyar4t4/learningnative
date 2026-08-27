import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    subContainer: {
        flex: 0.3,
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
    subheading: {
        fontSize: 16,
        fontWeight: '400',
        color: '#000',

    }
});

export default styles;