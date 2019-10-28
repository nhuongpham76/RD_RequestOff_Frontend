import ApiService from './ApiService';

export default class CommonApiRequest {
    static getAllTeams () {
        return ApiService.get('list-team');
    }
}