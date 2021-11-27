import { StyledNavbar } from './styles/Navbar.styled';
import { Container } from './styles/Container.styled';

export default function Navbar() {
    return (
        <Container>
            <StyledNavbar>
                <ul>
                    <li><a className="active" href="/dashboard">Dashboard</a></li>
                    <li><a href="/recipes">Recipes</a></li>
                    <li><a href="/challenge">Challenge</a></li>
                </ul>
                <div className="user-menu">
                    <div className="user-photo"></div>
                    <select name="user-menu-select" id="user-menu-select">
                        <option>Olivia Wilde</option>
                        <option>Change user</option>
                        <option>Settings</option>
                        <option>Logout</option>
                    </select>
                </div>
            </StyledNavbar>
        </Container>
    )
}
