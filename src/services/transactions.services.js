import axios from "axios";

const apiBaseUrl = process.env.REACT_APP_BASE_URL;

function postTransaction(transaction, token) {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    return axios.post(`${apiBaseUrl}/transaction`, transaction, config);
}

function getTrasactionsBalance(token) {
    const config = {
        headers: {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    }

    return axios.get(`${apiBaseUrl}/transaction/balance`)
}

export {
    postTransaction,
    getTrasactionsBalance,

}