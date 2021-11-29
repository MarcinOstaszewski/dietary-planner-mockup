import styled from "styled-components";
import { theme } from './theme';

export const StyledFooter = styled.footer`
    margin: 48px 0;
    display: flex;
    button {
        margin-right: 16px;
        font-size: 16px;
        color: ${theme.colors.font};
        padding: 12px;
        background-color: ${theme.colors.navbarBg};
        border: 1px solid ${theme.colors.borders};
        border-radius: 6px;
    }
`