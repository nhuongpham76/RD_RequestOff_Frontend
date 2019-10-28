import { TokenService } from "./StorageService";

const ApiService = {
  setApiBaseUrl(baseURL) {
      axios.defaults.baseURL = baseURL;
    },
  setToken() {
    axios.defaults.headers.common["Authorization"] = `Bearer ${TokenService.getToken()}`;
  },
  setLanguage(lang) {
    axios.defaults.headers.common["Language"] = lang;
  },
  removeHeader() {
    axios.defaults.headers.common = {};
  },
  get(api, params) {
    return axios.get(api, {params: params})
      .then(response => {return response.data})
      .catch(error => {return error.response.data;});
  },
  post(api, data, params) {
      return axios.post(api, data, {params: params})
        .then(response => {return response.data})
        .catch(error => {return error.response.data});
  },
  put(api, data, params) {
    return axios.put(api, data, {params: params})
      .then(response => {return response.data})
      .catch(error => {return error.response.data});
  },
  delete(api, params) {
    return axios.delete(api, {params: params})
      .then(response => {return response.data})
      .catch(error => {return error.response.data});
  },
  customRequest(data) {
    return axios(data);
  }
}
export default ApiService