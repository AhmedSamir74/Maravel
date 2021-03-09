import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export default StyleSheet.create({
    layout: {
        flex: 1,
        backgroundColor: theme.colors.background,
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    scrollView: {
        flex: 1,
        marginHorizontal: 10,
    },
    flexOne: {
        flex: 1,
    },
    title: {
        color: theme.colors.darkGrey,
        fontSize: 18,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    inputCon: {
        flex: 1,
        justifyContent: 'space-between',
    },
    inputContainer: {
        marginHorizontal: 5,
        marginVertical: 10,
    },
    imgContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    submitButton: {
        borderRadius: 50,
        marginBottom: 30,
        marginTop: 30,
    },
});
