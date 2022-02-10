import axios from '../../config/axios';
//import swal from 'sweetalert';

export const login = user =>
{
    return axios
    .post(`/account/login/`, user)
    .then(response => {
        //swal("Seja-bem vindo !");
        return response;
    })
    .catch(error => {
        //swal("Ocorreu um erro", `${error.response.data}\n`, "error");
        return null;
    });
}
