import styled from "styled-components";
import { Header } from "../common";
import DepositForm from "./DepositForm";

export default function Deposit() {
    return (
        <DepositWrapper>
            <Header>Nova entrada</Header>
            <DepositForm />
        </DepositWrapper>
    );
}

const DepositWrapper = styled.div`

`