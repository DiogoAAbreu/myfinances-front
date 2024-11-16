import styled from "styled-components";
import { Title } from "../common";
import FormSignUp from "./FormSignUp";
import { Link } from "react-router-dom";

export default function SignUp() {
    return (
        <SignUpWrapper>
            <Title />
            <FormSignUp />
            <StyledLink to="/">Já tem uma conta? Entre agora!</StyledLink>
        </SignUpWrapper>
    );
}

const SignUpWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
height: 100vh;
`

const StyledLink = styled(Link)`
font-weight:700;
    color: #854442;
    font-size: 15px;
    margin-top: 35px;
    text-decoration: none;
    transition: font-size 0.1s linear;
    &:hover{
        cursor: pointer;
        font-size: 16px;
        filter: brightness(1.1);
    }
`