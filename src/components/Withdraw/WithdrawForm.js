import { useState } from "react";
import styled from "styled-components";
import { Button } from "../common";

export default function WithdrawForm() {
    const [withdraw, setWithdraw] = useState({
        value: '',
        description: '',
    })

    function handleForm(event) {
        event.preventDefault();
    }

    return (
        <FormWrapper onSubmit={handleForm}>
            <input
                required
                placeholder="Valor"
                name="value"
                value={withdraw.value}
                onChange={event => {
                    setWithdraw({
                        ...withdraw,
                        [event.target.name]: event.target.value
                    })
                }}
            />

            <input
                required
                placeholder="Descrição"
                name="description"
                value={withdraw.description}
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
