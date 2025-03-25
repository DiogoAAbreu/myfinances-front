import styled from "styled-components"

export default function DeleteTransaction() {
    return (
        <DeleteWrapper>
            <DeleteDiv>
                <p>Deseja excluir esta transação?</p>
                <ButtonsDiv>
                    <button>Cancelar</button>
                    <button>Excluir</button>
                </ButtonsDiv>
            </DeleteDiv>
        </DeleteWrapper>
    )
}

const DeleteWrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.5);
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    z-index: 1;
`

const DeleteDiv = styled.div`
    width: 300px;
    height: 300px;
    background-color:#fff4e6;
    border-radius: 10px;
    padding: 10px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    position: relative;
`

const ButtonsDiv = styled.div`
display: flex;
justify-content: space-between;
width: 150px;
position: absolute;
right: 10px;
bottom: 10px;
background-color: red;
`