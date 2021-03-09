import { StyleSheet } from 'react-native';
import { theme } from '../../../constants';

const { colors } = theme;

export default StyleSheet.create({
    textInput: {
        height: 80,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: colors.primary,
        paddingHorizontal: 15,
        fontSize: 12,
        fontWeight: '400',
        color: theme.colors.black,
    },
    textInputLabel: {
        // fontWeight: 'bold',
        color: theme.colors.darkGrey,
        marginTop: 15,
        fontSize: 13,
    },
    errorMsg: {
        marginVertical: 5,
        fontSize: 12,
        color: theme.colors.error,
        textAlign: 'center',
    },
});
