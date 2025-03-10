import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { AuthContext } from "../../contexts/auth.context";
import { getTrasactionsBalance } from "../../services/transactions.services";
import { useNavigate } from "react-router-dom";
import Transaction from "./Transaction";

export default function TrasactionFrame() {
    const [balance, setBalance] = useState({
        deposit: '',
        withdraw: ''
    });

    const [transactions, setTransaction] = useState();

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


    }, [token, navigate])

    return (
        <FrameWrapper>
            <Transaction />
            <Amount balance={balance} />
        </FrameWrapper>
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

const FrameWrapper = styled.ul`
    width: 326px;
    height: 446px;
    border-radius: 5px;
    background-color:#fff4e6;
    position: relative;
`

const AmountDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    width: 326px;
    height: 30px;
    border-radius: 5px;
    position: absolute;
    bottom: 0;
    left: 0;
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