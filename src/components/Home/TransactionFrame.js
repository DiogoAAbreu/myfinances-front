import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { AuthContext } from "../../contexts/auth.context";
import { getTransactions, getTrasactionsBalance } from "../../services/transactions.services";
import { useNavigate } from "react-router-dom";
import Transaction from "./Transaction";
import DeleteTransaction from "./DeleteTransaction";

export default function TrasactionFrame() {
    const [balance, setBalance] = useState({
        deposit: '',
        withdraw: ''
    });

    const [transactions, setTransaction] = useState([]);

    const [deleteTransactionEnabled, setDeleteTransactionEnabled] = useState(false);

    const [selectedTransaction, setSelectedTransaction] = useState();

    const { token } = useContext(AuthContext);

    const navigate = useNavigate();

    useEffect(() => {
        getTrasactionsBalance(token).then(res => {
            setBalance({
                deposit: res.data.totalAmountDeposited,
                withdraw: res.data.totalAmountWithdrawn
            })
        }
        ).catch(error => {
            if (error.status === 401) {
                navigate('/');
            }
        })

        getTransactions(token).then(res => {
            setTransaction(res.data.reverse())
        }
        ).catch(error => {
            if (error.status === 401) {
                navigate('/');
            }
        })
    }, [token, navigate]);

    return (
        <>
            <FrameWrapper $deleteTransactionEnabled={deleteTransactionEnabled}>
                {!transactions[0] ? (<EmptyTable />) : transactions?.map(transaction => (
                    <Transaction
                        key={transaction._id}
                        id={transaction._id}
                        description={transaction.description}
                        value={transaction.value}
                        date={transaction.date}
                        type={transaction.type}
                        setDeleteTransactionEnabled={setDeleteTransactionEnabled}
                        setSelectedTransaction={setSelectedTransaction} />
                ))}
                {deleteTransactionEnabled && <DeleteTransaction
                    setDeleteTransactionEnabled={setDeleteTransactionEnabled}
                    description={selectedTransaction.description}
                    value={selectedTransaction.value}
                    type={selectedTransaction.type}
                    id={selectedTransaction.id} />}
            </FrameWrapper>
            <Amount balance={balance} />
        </>
    );
}

function Amount({ balance }) {
    const amount = balance.deposit - balance.withdraw;
    const amountFormated = String((amount / 100).toFixed(2)).replace('.', ',')
    return (
        <AmountDiv $balance={amount}>
            <p>SALDO</p>
            <span>R$ {amountFormated}</span>
        </AmountDiv>
    )
}

function EmptyTable() {
    return (
        <EmptyTableDiv>
            <p>
                Não há registros de<br />entrada ou saída
            </p>
        </EmptyTableDiv>
    )
}

const FrameWrapper = styled.ul`
    width: 326px;
    height: 416px;
    border-radius: 5px 5px 0px 0px;
    background-color:#fff4e6;
    overflow-y: ${props => props.$deleteTransactionEnabled === true ? 'hidden' : 'auto'};
    overflow-x: hidden;
    position: relative;
`

const AmountDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color:#fff4e6;
    padding: 15px;
    width: 326px;
    height: 30px;
    border-radius: 0px 0px 5px 5px;
    p{
        font-size: 17px;
        font-weight: 700;
        color: #000000;
    }
    span{
        font-size: 17px;
        font-weight: 400;
        color: ${props => props.$balance < 0 ? '#C70000' : '#03AC00'};
    }
`

const EmptyTableDiv = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    background-color:#fff4e6;
    width: 326px;
    height: 446px;
    font-size: 20px;
    border-radius: 5px;
    p{
        color: #868686;
    }
`