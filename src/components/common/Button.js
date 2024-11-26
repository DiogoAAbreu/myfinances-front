import styled from "styled-components";

export default function Button({
    children,
    onCLick,
    width,
    height,
    fontSize,
    margin
}) {
    return (
        <ButtonWrapper
            onCLick={onCLick}
            $width={width}
            $height={height}
            $fontSize={fontSize}
            $margin={margin}
        >
            {children}
        </ButtonWrapper>
    );
}

const ButtonWrapper = styled.button`
font-weight: 700;
display: flex;
align-items: center;
justify-content: center;
width: ${props => props.$width};
height: ${props => props.$height};
font-size: ${props => props.$fontSize};
background-color: #854442;
margin: ${props => props.$margin ? props.$margin : '0px'};
color: #fff4e6;
border-radius: 5px;
&:hover{
    filter: brightness(1.1)
}
`