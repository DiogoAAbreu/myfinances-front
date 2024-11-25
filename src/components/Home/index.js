import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/auth.context";
import { getUserByToken } from "../../services/user.services";
import { useNavigate } from "react-router-dom";
import { Header } from "../common";

export default function Home() {

    const { token } = useContext(AuthContext);

    const [user, setUser] = useState();

    const navigate = useNavigate();

    useEffect(() => {
        getUserByToken(token).then(res => {
            setUser(res.data);
        }).catch(error => {
            if (error.status === 401) {
                navigate('/');
            }
        })
    }, [token, navigate])

    return (
        <HomeWrapper>
            <Header>Olá, {user?.name}</Header>
        </HomeWrapper>
    );
}

const HomeWrapper = styled.div`
    height: 100%;
    width: 100%;
`