import { StyledMain } from './styles/Main.styled';
import { Container } from './styles/Container.styled';
import Header from './Header';
import ColumnSet from './ColumnSet';

export default function Main() {
    return (
        <StyledMain>
            <Container>
                <Header />
                <ColumnSet></ColumnSet>
            </Container>
        </StyledMain>
    );
}
