import axios from "axios";

const apiBaseUrl = process.env.REACT_APP_BASE_URL;

function postTransaction(transaction) {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    return axios.post(`${apiBaseUrl}/transaction`, transaction, config)
}

export {
    postTransaction,

}