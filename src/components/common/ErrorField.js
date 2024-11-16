import styled from "styled-components";

export default function ErrorField({ error }) {
    return (
        <ErrorFieldWrapper>
            <p>{error}</p>
        </ErrorFieldWrapper>
    );
}

const ErrorFieldWrapper = styled.div`
margin: 15px 0px;

p{
    color: red;
    font-size: 16px;
    font-weight: 500;
}
`