import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Toast, LoadingCircles } from "../common";
import { postNewSession } from '../../services/auth.services'
import { AuthContext } from '../../contexts/auth.context'
import { toast } from "react-toastify";
import styled from "styled-components";

export default function FormSignIn() {
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    const { setToken } = useContext(AuthContext);

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    function notifyError(error) {
        toast.error(error);
    };

    async function handleForm(event) {
        event.preventDefault();
        try {
            setLoading(true);
            const newSession = await postNewSession(userData);
            setToken(newSession.data);
            navigate('/home');
        } catch (error) {
            notifyError(error.response.data.message);
            setLoading(false);
        }
    }

    return (
        <FormSignInWrapper onSubmit={handleForm}>
            <input
                required
                disabled={loading}
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
                disabled={loading}
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
                {loading
                    ? <LoadingCircles
                        color={'#fff4e6'}
                        size={'35px'} />
                    : 'Entrar'}
            </Button>
            <Toast />
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