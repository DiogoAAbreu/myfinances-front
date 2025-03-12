import { useState, useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Button, Toast } from "../common";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/auth.context";
import { postTransaction } from "../../services/transactions.services";

export default function WithdrawForm() {
    const [withdraw, setWithdraw] = useState({
        value: '',
        description: '',
    })

    const { token } = useContext(AuthContext);

    const navigate = useNavigate();

    const formatCurrency = (value) => {
        const numericValue = value.replace(/\D/g, "");

        if (numericValue) {
            const formattedValue = parseFloat(numericValue) / 100;
            return new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
            }).format(formattedValue);
        }
        return "";
    };

    function notifyError(error) {
        toast.error(error);
    };

    async function handleForm(event) {
        event.preventDefault();

        const transaction = {
            type: 'withdraw',
            value: Number(withdraw.value.replace('R$', '').replace(/\./g, '').replace(',', '.')),
            description: withdraw.description
        }

        try {
            await postTransaction(transaction, token);
            navigate('/home');
        } catch (error) {
            console.log(transaction)
            if (error.status === 401) {
                navigate('/')
            }
            notifyError(error.response.data.message);
        }
    }

    return (
        <FormWrapper onSubmit={handleForm}>
            <input
                required
                placeholder="Valor"
                name="value"
                value={withdraw.value}
                onChange={event => {
                    const formattedValue = formatCurrency(event.target.value);
                    setWithdraw({
                        ...withdraw,
                        [event.target.name]: formattedValue
                    })
                }}
            />

            <input
                required
                placeholder="Descrição"
                name="description"
                value={withdraw.description}
                maxLength={20}
                onChange={event => {
                    setWithdraw({
                        ...withdraw,
                        [event.target.name]: event.target.value
                    })
                }}
            />

            <Button
                width={'326px'}
                height={'46px'}
                margin={'5px 0px 0px 0px'}
                fontSize={'20px'}>
                Salvar Saída
            </Button>
            <Toast />
        </FormWrapper>
    );
}

const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    input{
        width: 326px;
        height: 58px;
        border-radius: 5px;
        border: none;
        margin: 5px 0px;
        padding: 15px;
        font-size: 20px;
    }
`
