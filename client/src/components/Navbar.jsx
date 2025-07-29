import styled from "styled-components"
import { Link } from "react-router-dom"

const Nav = styled.nav`
    background: ${({ theme }) => theme.colors.dark};
    color: white;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const NavBrand = styled(Link)`
    font-weight: 700;
    font-size: 1.2rem;
`

const NavLinks = styled.div`
    display: flex;
    gap: 1rem;
`

const Navbar = () => {
    return (
        <Nav>
            <NavBrand to="/">Blog MERN</NavBrand>
            <NavLinks>
                <Link to="/login">Entrar</Link>
                <Link to="/register">Registro</Link>
            </NavLinks>
        </Nav>
    )
}

export default Navbar