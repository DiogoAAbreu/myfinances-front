import styled from "styled-components";
import { Header } from "../common";
import WithdrawForm from "./WithdrawForm";

export default function Withdraw() {
    return (
        <WithdrawWrapper>
            <Header>Nova saída</Header>
            <WithdrawForm />
        </WithdrawWrapper>
    );
}

const WithdrawWrapper = styled.div`

`