import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { AuthContext } from "../../contexts/auth.context";
import { getTrasactionsBalance } from "../../services/transactions.services";
import { useNavigate } from "react-router-dom";

export default function TrasactionFrame() {
    const [balance, setBalance] = useState({
        deposit: '',
        withdraw: ''
    });

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
            navigate('/');
        })
    }, [token, navigate])

    return (
        <FrameWrapper>

        </FrameWrapper>
    );
}

const FrameWrapper = styled.ul`
    width: 326px;
    height: 446px;
    border-radius: 5px;
    background-color:#fff4e6;
`