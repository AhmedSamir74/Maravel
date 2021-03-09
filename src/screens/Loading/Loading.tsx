import React, { useEffect } from 'react';
import { View, Image } from 'react-native';
import styles from './style';
import { getNewToken, isNewUser } from '../../services/utils';
import { useDispatch } from 'react-redux';
import { saveToken } from '../../services/redux/actions';

export const LoadingScreen = (props: any) => {
    const dispatch = useDispatch();
    const newUserHelper = async () => {
        const returnedNewUser = await isNewUser();
        // console.log(returnedNewUser);
        if (returnedNewUser) {
            props.navigation.navigate('OnBoarding');
        } else {
            props.navigation.navigate('Authorized');
        }
    };
    useEffect(() => {
        newUserHelper();
        initializeToken();
    }, []);

    const initializeToken = async () => {
        const { status, data } = await getNewToken();
        if (status) {
            dispatch(saveToken(data));
        }
    };
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/logo.png')} style={styles.img} />
        </View>
    );
};
