import styled from "styled-components";
import FormSignIn from "./FormSignIn";
import { Title } from "../common";

export default function SignIn() {
    return (
        <SignInWrapper>
            <Title />
            <FormSignIn />
            <a>Primeira vez? Cadastre-se!</a>
        </SignInWrapper>
    );
}

const SignInWrapper = styled.main`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
height: 100vh;

a{
    font-weight:700;
    color: #854442;
    font-size: 15px;
    margin-top: 35px;
    transition: font-size 0.1s linear;
    &:hover{
        cursor: pointer;
        font-size: 16px;
        filter: brightness(1.1);
    }

}
`