import axios from "axios";

const apiBaseUrl = process.env.REACT_APP_BASE_URL;

function postNewUser(newUser) {
    return axios.post(`${apiBaseUrl}/sign-up`, newUser);
};

function postNewSession(user) {
    return axios.post(`${apiBaseUrl}/sign-in`, user);
}

export {
    postNewUser,
    postNewSession
}