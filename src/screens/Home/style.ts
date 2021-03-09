import { StyleSheet } from 'react-native';
import { theme } from '../../constants';
export const styles = StyleSheet.create({
    layout: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
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
    activityIndicatorCont: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerCont: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },
    listCont: {
        flex: 1,
        marginBottom: 128,
        paddingTop: 5,
    },
    myListCont: {
        flex: 1,
    },
    sectionTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 10,
        color: theme.colors.darkGrey,
    },

    //ACTION SHEET
    contentContainerStyle: {
        padding: 16,
        backgroundColor: '#F3F4F9',
    },
    header: {
        alignItems: 'center',
        backgroundColor: 'white',
        paddingVertical: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    panelHandle: {
        width: 40,
        height: 2,
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: 4,
    },
    item: {
        padding: 20,
        justifyContent: 'center',
        backgroundColor: 'white',
        alignItems: 'center',
        marginVertical: 10,
    },
    noDataWarn: {
        flex: 1,
        backgroundColor: '#F3F4F9',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    bottomSheetStyle: {
        backgroundColor: '#F3F4F9',
    },
    noDataTxt: {
        fontSize: 15,
        fontWeight: 'bold',
        color: theme.colors.error,
        textAlignVertical: 'center',
    },
});
