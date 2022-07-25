import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    optionContainer: {
        borderWidth: 2,
        borderColor: "lightgrey",
        borderRadius: 10,
        borderBottomWidth: 4,
        width: '48%',
        height: '48%',
        alignItems: 'center'
    },

    optionImage: {
        width: '100%',
        flex: 1,
        padding: 10
    },
    selectedContainer: {
        backgroundColor: '#DDF4FE',
        borderColor: '#81D5FE'
    },
    selectedText: {
        color: '#40BEF7',
        fontWeight: "bold",
    },
    optionText: {
        fontWeight: "bold",
        color: 'black',
    }

});

export default styles;