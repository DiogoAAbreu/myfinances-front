import styled from "styled-components"
import { deleteTransaction } from "../../services/transactions.services";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth.context";
import { useNavigate } from "react-router-dom";
import { Toast } from "../common";
import { toast } from "react-toastify";

export default function DeleteTransaction({
    transactions,
    setTransactions,
    setDeleteTransactionEnabled,
    description,
    type,
    value,
    id
}) {
    const { token } = useContext(AuthContext);

    const navigate = useNavigate()

    function notifyError(error) {
        toast.error(error);
    };

    const valueFormated = String((value / 100).toFixed(2)).replace('.', ',');

    async function handleExclusion(idTransaction, token) {
        try {
            await deleteTransaction(idTransaction, token);
            setDeleteTransactionEnabled(false);
            setTransactions([
                ...transactions,
                transactions.filter(transaction => {
                    return transaction.id !== idTransaction
                })
            ])
        } catch (error) {
            if (error.status === 401) {
                navigate('/');
            }
            notifyError(error.response.data.message);
        }
    }

    return (
        <DeleteWrapper>
            <DeleteDiv>
                <h3>Deseja excluir esta transação?</h3>

                <div>
                    <SpanBold>Descrição: </SpanBold>
                    <span>{description}</span>
                </div>

                <div>
                    <SpanBold>Valor: </SpanBold>
                    <span>R$ {valueFormated}</span>
                </div>

                <div>
                    <SpanBold>Tipo: </SpanBold>
                    <span>{type === 'deposit' ? 'Deposito' : 'Saída'}</span>
                </div>
                <ButtonsDiv>
                    <ButtonCancel onClick={() => setDeleteTransactionEnabled(false)}>Cancelar</ButtonCancel>
                    <ButtonDelete onClick={() => handleExclusion(id, token)}>Excluir</ButtonDelete>
                </ButtonsDiv>
            </DeleteDiv>
            <Toast />
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
    div{
        margin: 10px;
    }
    h3{
        margin-bottom: 25px;
    }
`

const DeleteDiv = styled.div`
    width: 300px;
    height: 300px;
    background-color:#fff4e6;
    border-radius: 10px;
    padding: 20px;
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
`

const ButtonCancel = styled.button`
    font-weight: bold;
`

const ButtonDelete = styled.button`
    background-color: red;
    color: white;
    border-radius: 5px;
    padding: 6px;
    &:hover{
    filter: brightness(1.1)
    }
`

const SpanBold = styled.span`
    font-weight: bold;
`