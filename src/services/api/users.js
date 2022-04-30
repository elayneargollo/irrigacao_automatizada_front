import axios from '../../config/axios';

export const login = user =>
{
    return axios
    .post(`/account/login/`, user)
    .then(response => {
        return response;
    })
    .catch(error => {
        return null;
    });
}
