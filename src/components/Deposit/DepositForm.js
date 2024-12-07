import { useState } from "react";
import styled from "styled-components";
import { Button } from "../common";

export default function DepositForm() {
    const [deposit, setDeposit] = useState({
        value: '',
        description: '',
    })

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

    function handleForm(event) {
        event.preventDefault();
    }

    return (
        <FormWrapper onSubmit={handleForm}>
            <input
                required
                placeholder="Valor"
                name="value"
                value={deposit.value}
                onChange={event => {
                    const formattedValue = formatCurrency(event.target.value);
                    setDeposit({
                        ...deposit,
                        [event.target.name]: formattedValue
                    })
                }}
            />

            <input
                required
                placeholder="Descrição"
                name="description"
                value={deposit.description}
                onChange={event => {
                    setDeposit({
                        ...deposit,
                        [event.target.name]: event.target.value
                    })
                }}
            />

            <Button
                width={'326px'}
                height={'46px'}
                margin={'5px 0px 0px 0px'}
                fontSize={'20px'}>
                Salvar Entrada
            </Button>
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