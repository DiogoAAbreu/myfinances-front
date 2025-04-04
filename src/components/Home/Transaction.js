import styled from "styled-components"
import dayjs from "dayjs";

export default function Transaction({ date, description, value, type, id, setDeleteTransactionEnabled, setSelectedTransaction }) {
    const formattedValue = (value / 100).toFixed(2)

    const formattedDate = dayjs(date).format("DD/MM");
    return (
        <TransactionWrapper >
            <Date>{formattedDate}</Date>
            <Description>{description}</Description>
            <Value $type={type}>{formattedValue}</Value>
            <button onClick={() => {
                setDeleteTransactionEnabled(true)
                setSelectedTransaction({
                    description,
                    value,
                    type,
                    id,
                })
            }
            }>x</button>
        </TransactionWrapper>
    )
}

const TransactionWrapper = styled.li`
    height: 30px;
    display: flex;
    align-items: center;
    max-width: 100%;
    overflow: hidden;
    padding: 8px;
    margin-top: 10px;
    font-size: 16px;
    width: 100%;
    position: relative;
    border: 1px #fff4e6 solid;
    transition: 0.2s linear;
    button{
        color: #C6C6C6;
        margin-left:5px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        position: absolute;
        right: 0%;
        background-color:#fff4e6;
        padding: 4px;
    }
    &:hover{
        cursor: pointer;
        border-top: 1px solid rgb(226, 226, 226);
        border-bottom: 1px solid rgb(226, 226, 226);
    }
`

const Date = styled.span`
    color: #C6C6C6;
    margin-right: 8px;
`

const Description = styled.span`
    color: #000000;
`

const Value = styled.span`
    color: ${props => props.$type === 'deposit' ? '#03AC00' : '#C70000'};
    position: absolute;
    right: 5%;
    background-color:#fff4e6;
    padding-left:3px;
`