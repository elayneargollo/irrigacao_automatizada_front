import axios from '../../Config/axios';

export const login = user =>
{
    return axios
    .post(`/account/login/`, user)
    .then(response => {
        return response;
    })
    .catch(error => {
        return error;
    });
}
