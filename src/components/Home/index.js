import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/auth.context";
import { getUserByToken } from "../../services/user.services";
import { useNavigate } from "react-router-dom";
import { Header, LoadingCircles } from "../common";
import { ReactComponent as Exit } from '../../assets/exit-outline.svg';
import TrasactionFrame from "./TransactionFrame";
import Buttons from "./Buttons";
import { disableSession } from "../../services/auth.services";

export default function Home() {

    const { token } = useContext(AuthContext);

    const [user, setUser] = useState();

    const [loading, setLoading] = useState(false);

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

    async function signOut() {
        try {
            setLoading(true);
            await disableSession(token);
            navigate('/');
        } catch (error) {
            setLoading(false);
        }
    }

    return (
        <HomeWrapper>
            <Header>
                Olá, {user?.name}
                {loading ?
                    <LoadingCircles

                    /> :
                    <Exit
                        width={'40px'}
                        height={'40px'}
                        style={{ cursor: 'pointer' }}
                        onClick={signOut}
                    />}
            </Header>

            <TrasactionFrame>
            </TrasactionFrame>

            <Buttons />
        </HomeWrapper>
    );
}

const HomeWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`