import styled from "styled-components";
import { Button } from "../common";
import { ReactComponent as Minus } from '../../assets/remove-circle-outline.svg';
import { ReactComponent as Plus } from '../../assets/add-circle-outline.svg';

export default function Buttons() {
    return (
        <ButtonsWrapper>
            <Button
                height={'114px'}
                width={'155px'}
                fontSize={'17px'}
            >
                <ContentButton>
                    <Plus
                        height={'25px'}
                        width={'25px'}
                        left={'0px'}
                    />
                    <div>
                        <p>Nova</p>
                        <p>entrada</p>
                    </div>
                </ContentButton>
            </Button>

            <Button
                height={'114px'}
                width={'155px'}
                fontSize={'17px'}
            >
                <ContentButton>
                    <Minus
                        height={'25px'}
                        width={'25px'}
                        left={'0px'}
                    />
                    <div>
                        <p>Nova</p>
                        <p>saída</p>
                    </div>
                </ContentButton>
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

const ContentButton = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    padding: 10px;
    text-align: start;
`