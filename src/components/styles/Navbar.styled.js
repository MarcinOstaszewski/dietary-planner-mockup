import styled from "styled-components";
import { theme } from './theme';

export const StyledNavbar = styled.nav`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${theme.colors.navbarBg};
    border-bottom: 1px solid ${theme.colors.borders};
    ul {
        display: flex;
        height: 100%;
        align-items: center;
        list-style: none;
        border-left: 1px solid ${theme.colors.borders};
        margin-left: 120px;
        li {
            padding: 24px 15px 24px;
            a {
                text-transform: uppercase;
                text-decoration: none;
                font-weight: 700;
                color: ${theme.colors.fontActive};
                position: relative;
                &.active {
                    color: ${theme.colors.primary};
                    &::after {
                        content: '';
                        position: absolute;
                        height: 1px;
                        width: 24px;
                        bottom: -10px;
                        left: 50%;
                        transform: translateX(-50%);
                        background-color: ${theme.colors.primary};
                    }
                }
            }
            &:hover {
                background-color: ${theme.colors.borders};
            }
        }
    }
    .user-menu {
        display: flex;
        align-items: center;
        select {
            border: 0;
            outline: none;
            height: 100%;
        }
    }
    .user-photo {
        width: 40px;
        height: 40px;
        margin-right: 8px;
        border-radius: 50%;
        box-shadow: 0px 2px 2px ${theme.colors.font};
        background-color: ${theme.colors.borders};
    }
`