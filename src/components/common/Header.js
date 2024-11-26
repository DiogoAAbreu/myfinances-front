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
    width: 326px;
    height: 80px;
    font-size: 26px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: space-between;
`