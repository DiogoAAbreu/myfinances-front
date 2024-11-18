import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button, ErrorField } from "../common";
import { postNewSession } from '../../services/auth.services'
import { AuthContext } from '../../contexts/auth.context'

export default function FormSignIn() {
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    const [error, setError] = useState('');

    const { setToken } = useContext(AuthContext);

    const navigate = useNavigate();

    async function handleForm(event) {
        event.preventDefault();
        try {
            const newSession = await postNewSession(userData);
            setToken(newSession.data);
            navigate('/home');
        } catch (error) {
            setError(error.response.data.message)
        }
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

            {error && <ErrorField error={error} />}

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