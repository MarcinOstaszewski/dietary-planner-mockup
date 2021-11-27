import { StyledColumnSet } from './styles/ColumnSet.styled';
import { Container } from './styles/Container.styled';
import Column from './Column';

export default function Main() {
    return (
        <Container>
            <StyledColumnSet>
                <Column width="85px" bg="dark">
                    <div></div>
                    <div><b>6:00</b> AM</div>
                    <div><b>9:00</b> AM</div>
                    <div><b>12:00</b> AM</div>
                    <div><b>3:00</b> PM</div>
                    <div><b>6:00</b> PM</div>
                </Column>
                <Column width="127px" bg="light">
                    <div></div>
                    <div><b>6:00</b> AM</div>
                    <div><b>9:00</b> AM</div>
                    <div><b>12:00</b> AM</div>
                    <div><b>3:00</b> PM</div>
                    <div><b>6:00</b> PM</div>
                </Column>
                <Column width="127px" bg="light"></Column>
                <Column width="127px" bg="light"></Column>
                <Column width="127px" bg="light"></Column>
                <Column width="127px" bg="light"></Column>
                <Column width="127px" bg="light"></Column>
            </StyledColumnSet>
        </Container>
    );
}