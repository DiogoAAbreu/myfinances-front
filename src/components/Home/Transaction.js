import styled from "styled-components"

export default function Transaction({ date, description, value }) {
    return (
        <TransactionWrapper>
            <Date>02/03M</Date>
            <Description>Metidaaaaaaaaaaaaaaa</Description>
            <Value>2000</Value>
            <button>X</button>
        </TransactionWrapper>
    )
}

const TransactionWrapper = styled.div`
    height: 30px;
    display: flex;
    align-items: center;
    padding: 8px;
    margin-top: 10px;
    font-size: 16px;
    width: 100%;
    background-color: purple;
    button{
        color: #C6C6C6;
        margin-left:5px;
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
    color: #C70000;
    margin-left: auto;
`