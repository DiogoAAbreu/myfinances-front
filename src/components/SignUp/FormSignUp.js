import { useState } from "react";
import styled from "styled-components";
import { Button, LoadingCircles, Toast } from "../common";
import { useNavigate } from "react-router-dom";
import { postNewUser } from "../../services/auth.services";
import { toast } from "react-toastify";

export default function FormSignUp() {
    const [newUser, setNewUser] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    function notifyError(error) {
        toast.error(error);
    }

    async function handleForm(event) {
        event.preventDefault();
        try {
            setLoading(true);
            await postNewUser(newUser);
            navigate('/');
        } catch (error) {
            notifyError(error.response.data.message)
            setLoading(false);
        }
    }

    return (
        <FormSignUpWrapper onSubmit={handleForm}>
            <input
                required
                disabled={loading}
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
                disabled={loading}
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
                disabled={loading}
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
                disabled={loading}
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

            <Button
                height={'46px'}
                width={'326px'}
                margin={'5px 0px'}
                fontSize={'20px'}
            >
                {loading
                    ? <LoadingCircles
                        color={'#fff4e6'}
                        size={'35px'} />
                    : 'Cadastrar'}
            </Button>
            <Toast />
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