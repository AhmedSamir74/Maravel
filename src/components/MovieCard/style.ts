import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export const styles = StyleSheet.create({
    cardCont: {
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginVertical: 5,
    },
    cardImg: {
        width: 100,
        height: 100,
        borderRadius: 5,
    },
    textCont: {
        flex: 1,
        paddingLeft: 10,
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    overview: {
        fontSize: 14,
        color: theme.colors.darkGrey,
        marginBottom: 7,
    },
    date: {
        fontSize: 12,
        color: theme.colors.darkGrey,
    },
});
