import styled from "styled-components";
import { Button } from "../common";

export default function Buttons() {
    return (
        <ButtonsWrapper>
            <Button
                height={'114px'}
                width={'155px'}
                fontSize={'17px'}
            >
                Nova entrada
            </Button>

            <Button
                height={'114px'}
                width={'155px'}
                fontSize={'17px'}
            >
                Nova saída
            </Button>
        </ButtonsWrapper>)
        ;
}

const ButtonsWrapper = styled.div`
    width: 326px;
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
`