import axios from "axios";

const apiBaseUrl = process.env.REACT_APP_BASE_URL;

function postNewUser(newUser) {
    return axios.post(`${apiBaseUrl}/sign-up`, newUser);
};

function postNewSession(user) {
    return axios.post(`${apiBaseUrl}/sign-in`, user);
}

function disableSession(token) {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    return axios.delete(`${apiBaseUrl}/sign-out`, config);
}

export {
    postNewUser,
    postNewSession,
    disableSession,

}