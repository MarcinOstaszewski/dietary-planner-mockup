import styled from "styled-components";
import { theme } from './theme';

export const StyledColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: ${(props) => props.width};
    div {
        height: 90px;
        border-bottom: 1px solid ${theme.colors.borders};
    }
    div:nth-child(1) {
        height: 50px;
    }
    div:nth-child(7),
    div:nth-child(8) {
        height: 90px;
    }
`;