import axios from '../../Config/axios';

export const postPlantas = planta =>
{
    return axios
    .post(`/plantas/${planta.nome}`, planta)
    .then(response => {
        return response;
    })
    .catch(error => {
        return error;
    });
}

export const putPlantas = planta =>
{
    return axios
    .put(`/plantas/`, planta)
    .then(response => {
        return response;
    })
    .catch(error => {
        return error;
    });
}

export const getPlantas = () =>
{
    return axios
    .get(`/plantas/`)
    .then(response => {
        return response;
    })
    .catch(error => {
        return error;
    });
}

export const getByIdPlantas = id =>
{
    return axios
    .get(`/plantas/${id}`)
    .then(response => {
        return response;
    })
    .catch(error => {
        return error;
    });
}

export const deleteByIdPlantas = id =>
{
    return axios
    .delete(`/plantas/${id}`)
    .then(response => {
        return response;
    })
    .catch(error => {
        return error;
    });
}

