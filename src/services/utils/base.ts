import { I18nManager } from "react-native";

const publicKey = "7e530670d870cc1cd95c07b32e367299";
let privateKey = "a1fec537abfd6748c8df28f87544b3b0f6fdfb8d";
const baseURL = `https://gateway.marvel.com/v1/public/`;
var md5 = require("md5");

class BaseController {
  headers = {
    Accept: "application/json",
  };

  async _getRequest(endpoint: string) {
    return await this._request(
      "GET",
      `${baseURL}${endpoint}${
        endpoint.includes("?") ? "&" : "?"
      }${this.generateAPICredentials()}`
    );
  }

  async _getRequestWithUrl(url: string) {
    return await this._request("GET", url);
  }

  async _postRequest(endpoint: string, body: Object) {
    return await this._request(
      "POST",
      `${baseURL}${endpoint}${
        endpoint.includes("?") ? "&" : "?"
      }${this.generateAPICredentials()}`,
      body
    );
  }

  async _patchRequest(endpoint: string, body: Object) {
    return await this._request(
      "PATCH",
      `${baseURL}${endpoint}${
        endpoint.includes("?") ? "&" : "?"
      }${this.generateAPICredentials()}`,
      body
    );
  }

  async _deleteRequest(endpoint: string, body: Object) {
    return await this._request(
      "DELETE",
      `${baseURL}${endpoint}${
        endpoint.includes("?") ? "&" : "?"
      }${this.generateAPICredentials()}`,
      body
    );
  }

  async _request(method: string, url: string, body = {}) {
    // console.log("[" + method + "] URL => ", url);
    // console.log('Body => ', JSON.stringify(body, null, 4));

    let headers = {
      ...this.headers,
    };
    let options: any = {
      method,
      headers,
    };
    if (I18nManager.isRTL) {
      options.headers["Accept-Language"] = "ar";
    }
    if (method !== "GET") {
      options.headers["Content-Type"] = "application/json";
      options.body = JSON.stringify(body);
    }

    try {
      let response = await fetch(url, options);
      let responseJson = await response.json();
      return responseJson;
    } catch (error) {
      return error;
    }
  }

  generateAPICredentials() {
    let ts = new Date().getTime();
    let hashedCode = md5(ts + privateKey + publicKey);
    return `apikey=${publicKey}&hash=${hashedCode}&ts=${ts}`;
  }
  handleErrors(response: any) {
    let message = "";
    if (response.code != 200) {
      message += response.reason;
    }
    return message;
  }
}

export default BaseController;
