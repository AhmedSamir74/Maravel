import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    cardCont: {
        // borderWidth: 1,
        // height: Dimensions.get("window").height / 4,
        height: 125,
        backgroundColor: 'white',
        borderRadius: 15,
        borderColor: '#000',
        padding: 5,
        margin: 10,
        elevation: 6,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
    },
    cardInner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    cardImg: {
        height: 50,
        width: 70,
    },
});
