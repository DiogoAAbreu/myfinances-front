import axios from "axios";

const apiBaseUrl = process.env.REACT_APP_BASE_URL;

function getUserByToken(token) {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    return axios.get(`${apiBaseUrl}/user`, config);
}