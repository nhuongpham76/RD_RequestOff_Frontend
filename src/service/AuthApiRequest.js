import ApiService from './ApiService';
// const API_URI = '5d4112d33100006b005390b7';
const API_URI = '5d414de53100006b0053923a';

export default class AuthApiRequest {
    static login (data) {
        return ApiService.post(API_URI, data);
    }
}