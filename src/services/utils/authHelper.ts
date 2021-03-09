import AsyncStorage from '@react-native-community/async-storage';
import BaseController from './base';
export const isNewUser = async () => {
    let isNew = true;
    await AsyncStorage.getItem('isNewUser', (_err, result: any) => {
        if (result !== null) {
            isNew = false;
        }
    });
    return isNew;
};

export const setNewUser = async (isNew: boolean) => {
    AsyncStorage.setItem('isNewUser', JSON.stringify(isNew));
};

export const getNewToken = async () => {
    const baseController = new BaseController();

    let response = await baseController._getRequest(`authentication/token/new`);
    // console.log(JSON.stringify(response, null, 4));

    if (response.success) {
        return {
            status: true,
            data: response.request_token,
        };
    } else {
        return { status: false, data: baseController.handleErrors(response) };
    }
};

export const getNewSessionID = async (requestToken: string) => {
    const baseController = new BaseController();

    let response = await baseController._postRequest(`authentication/session/new`, {
        request_token: requestToken,
    });
    // console.log(JSON.stringify(response, null, 4));

    if (response.success) {
        return {
            status: true,
            data: response.session_id,
        };
    } else {
        return { status: false, data: baseController.handleErrors(response) };
    }
};
