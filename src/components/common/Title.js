import styled from "styled-components";

export default function Title() {
    return (
        <TitleWrapper>MyFinances</TitleWrapper>
    );
}

const TitleWrapper = styled.h1`
    font-size: 32px;
    color: #3c2f2f;
    font-family: "Saira Stencil One", sans-serif;
    margin-bottom: 30px;
    cursor: default;
`