/* eslint-disable prettier/prettier */

import { _retrieveData } from './helpers';
import { I18nManager } from 'react-native';

const baseURL = `https://api.themoviedb.org/3/`;
class BaseController {
    headers = {
        Accept: 'application/json',
    };

    async _getRequest(endpoint: string) {
        return await this._request(
            'GET',
            `${baseURL}${endpoint}${
                endpoint.includes('?') ? '&' : '?'
            }api_key=564e2ee657f9d953e1e12c1d151adf01`
        );
    }

    async _getRequestWithUrl(url: string) {
        return await this._request('GET', url);
    }

    async _postRequest(endpoint: string, body: Object) {
        return await this._request(
            'POST',
            `${baseURL}${endpoint}${
                endpoint.includes('?') ? '&' : '?'
            }api_key=564e2ee657f9d953e1e12c1d151adf01`,
            body
        );
    }

    async _patchRequest(endpoint: string, body: Object) {
        return await this._request(
            'PATCH',
            `${baseURL}${endpoint}${
                endpoint.includes('?') ? '&' : '?'
            }api_key=564e2ee657f9d953e1e12c1d151adf01`,
            body
        );
    }

    async _deleteRequest(endpoint: string, body: Object) {
        return await this._request(
            'DELETE',
            `${baseURL}${endpoint}${
                endpoint.includes('?') ? '&' : '?'
            }api_key=564e2ee657f9d953e1e12c1d151adf01`,
            body
        );
    }

    async _request(method: string, url: string, body = {}) {
        // console.log('[' + method + '] URL => ', url);
        // console.log('Body => ', JSON.stringify(body, null, 4));

        // let userToken = await _retrieveData('user_token');
        let headers = {
            ...this.headers,
            // Authorization: 'Bearer ' + userToken,
        };
        let options: any = {
            method,
            headers,
        };
        if (I18nManager.isRTL) {
            options.headers['Accept-Language'] = 'ar';
        }
        if (method !== 'GET') {
            options.headers['Content-Type'] = 'application/json';
            options.body = JSON.stringify(body);
        }
        // console.log("response => ", JSON.stringify(options, null, 4));

        try {
            let response = await fetch(url, options);
            let responseJson = await response.json();
            // console.log("response => ", JSON.stringify(responseJson, null, 4));
            return responseJson;
        } catch (error) {
            // console.log("error => ", JSON.stringify(error, null, 4));
            return error;
        }
    }

    handleErrors(response: any) {
        let message = '';
        if (response.status_message) {
            message += response.status_message;
        }
        if (response.errors) {
            response.errors.map((msg: string) => (message += msg + '\n'));
        }
        return message;
    }
}

export default BaseController;
