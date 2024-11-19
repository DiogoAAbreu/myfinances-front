import styled from "styled-components";

export default function Content({ children }) {
    return (
        <ContentWrapper>
            {children}
        </ContentWrapper>
    );
}

const ContentWrapper = styled.div`
    width: 400px;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Raleway", sans-serif;
`