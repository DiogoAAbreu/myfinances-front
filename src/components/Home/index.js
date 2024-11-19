import styled from "styled-components";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth.context";

export default function Home() {

    const { token } = useContext(AuthContext);

    return (
        <HomeWrapper>

        </HomeWrapper>
    );
}

const HomeWrapper = styled.div`

`

