const axios = require('axios').default;

const API_BASE_URL = 'https://listicle.deegeehub.com/api';
export const request = ({ url, method, data }) => {
    return axios({
        method: method || 'get',
        url: `${API_BASE_URL}${url}`,
        data,
    });
}


export const addTokenToAxios = (token) => {
    console.log('Authorization Token', token);
    axios.defaults.headers.Authorization = token;
}
