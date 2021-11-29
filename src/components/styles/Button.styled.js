import styled from "styled-components";
import { theme } from './theme';

const ButtonStyled = styled.button`
    display: flex;
    align-items: center;
    margin-right: 16px;
    font-size: 16px;
    color: ${theme.colors.font};
    padding: 12px;
    background-color: ${theme.colors.mainBg};
    border: 1px solid ${theme.colors.borders};
    border-radius: 6px;
    img.icon {
        margin-right: 8px;
        height: 20px;
    }
    img.chevron {
        height: 12px;
        margin-left: 8px;
    }
`

export default ButtonStyled;