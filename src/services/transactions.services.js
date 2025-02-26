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
            Authorization: `Bearer ${token}`
        }
    }

    return axios.get(`${apiBaseUrl}/transaction/balance`, config)
}

function deleteTransaction(idTransaction, token) {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    return axios.delete(`${apiBaseUrl}/transaction/${idTransaction}`, config);
}

function updateTransaction(idTransaction, transaction, token) {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    return axios.put(`${apiBaseUrl}/transaction/${idTransaction}`, transaction, config)
}

export {
    postTransaction,
    getTrasactionsBalance,
    deleteTransaction,
    updateTransaction

}