import styled from "styled-components";
import FormSignIn from "./FormSignIn";
import { Title } from "../common";
import { Link } from "react-router-dom";

export default function SignIn() {
    return (
        <SignInWrapper>
            <Title />
            <FormSignIn />
            <StyledLink to="/cadastro">Primeira vez? Cadastre-se!</StyledLink>
        </SignInWrapper>
    );
}

const SignInWrapper = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const StyledLink = styled(Link)`
    font-weight:700;
    color: #854442;
    font-size: 15px;
    margin-top: 35px;
    text-decoration: none;
    transition: transform 200ms ease;
    &:hover{
        cursor: pointer;
        transform: scale(1.05);
        filter: brightness(1.1);
    }
`