import ApiService from './ApiService';
const API_URI = 'users';

export default class AuthApiRequest {
    static createUser (data) {
        return ApiService.post(API_URI, data);
    }
}