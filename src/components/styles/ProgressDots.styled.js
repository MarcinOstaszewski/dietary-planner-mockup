import styled from 'styled-components';
import { theme } from '../styles/theme'

export const StyledProgressDots = styled.ul`
    counter-reset: step;
    position: relative;
    list-style: none;
    display: flex;
    height: 12px;
    width: 240px;
    li {
        margin: 8px 0;
        width: 20px;
        height: 2px;
        background-color: ${theme.colors.secondary};
        &::before {
            content: '';
            width: 10px;
            height: 10px;
            border-radius: 50%;
            position: relative;
            bottom: 4px;
            background-color: ${theme.colors.secondary};
            display: block;
        }
        &::after {
            content: counter(step);
            counter-increment: step;
            margin-left: 3px;
        }
        &:nth-child(9) ~ li {
            &::after {
                margin-left: 0px;
            }
        }
    }
    li.current,
    li.current ~ li,
    li.current ~ li::before {
        background: ${theme.colors.font};
    }
    li.current::before {
        border: 2px solid ${theme.colors.font};
        width: 6px;
        height: 6px;
        background-color: ${theme.colors.navbarBg};
    }
    li:last-child {
        width: 0;
    }


`;