import styled from "styled-components";
import { theme } from './theme';

export const StyledColumn = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: ${(props) => props.width || '127px'} ;
    border: ${ (props) => props.highlight ? '2px solid ' + theme.colors.primary : '' };
    & > div {
        box-sizing: border-box;
        height: 90px;
        border-bottom: 1px solid ${theme.colors.darkBorders};
        border-right: 1px solid ${ (props) => props.highlight ? theme.colors.navbarBg : theme.colors.borders };;
        padding: 12px;
        background-color: ${ (props) => props.first ? theme.colors.darkGrey : theme.colors.navbarBg }; //
        display: flex;
        justify-content: ${ (props) => props.first ? 'center' : 'left' };
        ${ (props) => props.first ? 'align-items: center' : '' };
        color: ${ (props) => props.highlight ? theme.colors.fontActive : theme.colors.font};
        b {
            margin-right: 4px;
        }
    }
    div:nth-child(1) {
        height: ${ (props) => props.highlight ? '48px' : '50px' };
        font-size: 24px;
        color: ${ (props) => props.highlight ? theme.colors.primary : theme.colors.secondary };
        text-transform: uppercase;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 600;
    }
    div:nth-child(2),
    div:nth-child(3),
    div:nth-child(4),
    div:nth-child(5),
    div:nth-child(6) {
        &.marked {
            position: relative;
            &::after {
                content: url('tick-circle.svg');
                position: absolute;
                display: block;
                top: 8px;
                right: 4px;
                width: 16px;
                height: 16px;
                filter: ${theme.colors.primaryFilter};
            }
        }
    }

    div:nth-child(7),
    div:nth-child(8) {
        height: 35px;
        background-color: ${theme.colors.darkGrey};
        display: flex;
        justify-content: center;
    }
    div:nth-child(7) {
        text-transform: uppercase;
    }
    div:nth-child(8) {
        padding: 4px;
        img {
            height: 24px;
        }
        img:nth-child(2) {
            display: none;
            margin: 4px 8px;
            height: 12px;
        }
        &.active {
            img {
                filter: ${theme.colors.primaryFilter};
            }
            img:nth-child(2) {
                display: block;
            }
        }
    }

    /* THE LAST COLUMN */
    div.sunday-guilt-free {
        height: calc(5 * 90px);
        padding: 0;
        span.rotate {
            height: calc(5 * 90px);
            width: 127px;
            font-size: 36px;
            text-transform: uppercase;
            display: flex;
            justify-content: center;
            align-items: center;
            writing-mode: vertical-rl;
            text-orientation: sideways;
            transform: rotate(180deg);
        }
    }
    div.sunday-print {
        height: 70px;
        text-align: center;
        font-size: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${theme.colors.darkGrey};
        span {
            margin-left: 6px;
        }
        img {
            opacity: .3;
            .active{
                opacity: .8;
            }
        }
    }
`;