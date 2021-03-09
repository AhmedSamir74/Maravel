import { Dimensions, StyleSheet } from 'react-native';
import { theme } from '../../../constants';

const { colors } = theme;

export default StyleSheet.create({
    textInput: {
        height: 45,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: colors.primary,
        paddingHorizontal: 15,
        fontSize: 12,
        fontWeight: '400',
        color: theme.colors.black,
        overflow: 'hidden',
        justifyContent: 'center',
    },
    iosTextInput: {
        width: Dimensions.get('screen').width * 0.85,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: colors.primary,
        paddingHorizontal: 15,
        fontSize: 12,
        fontWeight: '400',
        color: theme.colors.black,
        overflow: 'hidden',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    text: {
        fontSize: 12,
        fontWeight: '400',
        color: theme.colors.black,
        textAlignVertical: 'center',
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
    dateIcon: {
        position: 'absolute',
        left: -100,
        top: 0,
    },
    dateInput: {
        flex: 1,
        borderWidth: 0,
        alignItems: 'flex-start',
        paddingHorizontal: 7,
    },
});
