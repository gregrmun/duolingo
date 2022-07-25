import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'stretch'
    },
    optionsContainer: {
        marginVertical: 10,
        width: "100%",
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignContent: 'space-between',
        alignItems: 'stretch'
    },
});

export default styles;