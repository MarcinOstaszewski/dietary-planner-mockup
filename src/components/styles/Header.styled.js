import styled from "styled-components";
import { theme } from './theme';

export const StyledHeader = styled.header`
    background-color: ${({bg}) => bg};
    padding: 30px 0;
    width: 100%;
    display: flex;
    justify-content: space-between;

    .header-progress,
    .header-slider,
    .header-options {
        height: 50px;
        display: flex;
        flex-direction: column;
    }
    .header-slider {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 240px;

        .slider-button {
            height: 42px;
            width: 24px;
            border: 1px solid ${theme.colors.borders};
            border-radius: 4px;
            background-color: ${theme.colors.navbarBg};
            cursor: pointer;
            img {
                width: 20px;
                height: 42px;
            }
            &.prev {
                img {
                    transform: rotate(180deg);
                }
            }
            &:hover {
                background-color: ${theme.colors.primary}11;
            }
            &.disabled, &.disabled img {
                pointer-events: none;
                opacity: .4;
            }
        }
        .slider-title {
            font-size: 40px;
            color: ${theme.colors.primary};
        }
    }
    ul.options-display {
        width: 200px;
        display: flex;
        list-style: none;
        li {
            width: 18%;
            margin-right: 2%;
            height: 32px;
            padding: 2px;
            img {
                opacity: .3;
                transform: translateY(-2px);
            }
            &.active {
                img {
                    opacity: 1;
                }
            }
            &:hover {
                img {
                    opacity: .5;
                }
            }
        }
    }
`