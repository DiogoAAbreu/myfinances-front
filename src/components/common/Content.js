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
font-family: "Raleway", sans-serif;
`