import styled from "styled-components"

function DeleteTransaction() {
    return (
        <DeleteWrapper>
            <p>Deseja excluir esta transação?</p>
            <button>Cancelar</button>
            <button>Excluir</button>
        </DeleteWrapper>
    )
}

const DeleteWrapper = styled.div`
    width: 326px;
    background-color:#fff4e6;
`