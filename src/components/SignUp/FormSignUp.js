import { useState } from "react";
import styled from "styled-components";
import { Button, ErrorField } from "../common";
import { useNavigate } from "react-router-dom";
import { postNewUser } from "../../services/auth.services";

export default function FormSignUp() {
    const [newUser, setNewUser] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [error, setError] = useState('')

    const navigate = useNavigate();

    async function handleForm(event) {
        event.preventDefault();
        try {
            await postNewUser(newUser);
            navigate('/');
        } catch (error) {
            setError(error.response.data.message)
        }
    }

    return (
        <FormSignUpWrapper onSubmit={handleForm}>
            <input
                required
                placeholder="Nome"
                name="name"
                value={newUser.name}
                onChange={event => {
                    setNewUser({
                        ...newUser,
                        [event.target.name]: event.target.value
                    })
                }}
            />

            <input
                required
                placeholder="E-mail"
                name="email"
                value={newUser.email}
                onChange={event => {
                    setNewUser({
                        ...newUser,
                        [event.target.name]: event.target.value
                    })
                }}
            />

            <input
                required
                placeholder="Senha"
                name="password"
                value={newUser.password}
                type="password"
                onChange={event => {
                    setNewUser({
                        ...newUser,
                        [event.target.name]: event.target.value
                    })
                }}
            />

            <input
                required
                placeholder="Confirme a senha"
                name="confirmPassword"
                value={newUser.confirmPassword}
                type="password"
                onChange={event => {
                    setNewUser({
                        ...newUser,
                        [event.target.name]: event.target.value
                    })
                }}
            />
            {error && <ErrorField error={error} />}
            <Button
                height={'46px'}
                width={'326px'}
                margin={'5px 0px'}
                fontSize={'20px'}
            >
                Cadastrar
            </Button>
        </FormSignUpWrapper>
    );
}

const FormSignUpWrapper = styled.form`
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