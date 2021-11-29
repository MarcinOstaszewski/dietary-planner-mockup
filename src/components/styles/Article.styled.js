import styled from "styled-components";
import { theme } from './theme';

export const StyledArticle = styled.article`
    display: flex;
    flex-direction: column;
    padding-right: 72px;
    border-right: 1px solid ${theme.colors.borders};
    color: ${theme.colors.font};
    &:nth-child(n+2) {
        padding-left: 50px;
    }
    h2 {
        font-size: 28px;
        margin: 0 0 16px;
        max-width: 240px;
    }
    p {
        font-size: 16px;
        margin-bottom: 24px;
        max-width: 240px;
    }
    .buttons {
        display: flex;

    }
`