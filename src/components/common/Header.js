import styled from "styled-components";

export default function Header({ children }) {
    return (
        <HeaderWrapper>
            {children}
        </HeaderWrapper>
    );
}

const HeaderWrapper = styled.header`
    color: #3c2f2f;
`