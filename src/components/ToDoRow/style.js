import {StyleSheet,} from 'react-native';

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        padding: 10,
        marginBottom: 10,
    },
    todoText: {
        flex: 1,
        marginRight: 10,
    },
    buttonsView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    space: {
        width: 20, // or whatever size you need
        height: 20,
    },
});

export default styles;