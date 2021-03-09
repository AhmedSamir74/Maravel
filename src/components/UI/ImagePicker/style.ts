import { StyleSheet } from 'react-native';
import { theme } from '../../../constants';

const { colors } = theme;

export default StyleSheet.create({
    picker: {
        borderWidth: 2,
        borderColor: colors.primary,
        borderRadius: 50,
        height: 45,
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingTop: 45 / 4,
    },
    pickImg: {
        height: 125,
        width: 125,
        borderRadius: 125 / 2,
        margin: 10,
        backgroundColor: theme.colors.veryLightGrey,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pickText: {
        color: theme.colors.blue,
    },
});
