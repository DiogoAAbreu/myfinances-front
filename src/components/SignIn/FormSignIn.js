import { useState } from "react";
import styled from "styled-components";
import { Button } from "../common";

export default function FormSignIn() {
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    function handleForm(event) {
        event.preventDefault();
    }

    return (
        <FormSignInWrapper onSubmit={handleForm}>
            <input
                required
                placeholder="E-mail"
                name="email"
                value={userData.email}
                onChange={event => setUserData({
                    ...userData,
                    [event.target.name]: event.target.value
                })}
            />

            <input
                required
                placeholder="Senha"
                name="password"
                type="password"
                value={userData.password}
                onChange={event => setUserData({
                    ...userData,
                    [event.target.name]: event.target.value
                })}
            />

            <Button
                height={'46px'}
                width={'326px'}
                margin={'5px 0px'}
                fontSize={'20px'}
            >
                Entrar
            </Button>
        </FormSignInWrapper >
    );
}

const FormSignInWrapper = styled.form`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

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