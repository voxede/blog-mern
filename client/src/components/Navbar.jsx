import styled from "styled-components"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

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
    const { user } = useContext(AuthContext)

    return (
        <Nav>
            <NavBrand to="/">Blog MERN</NavBrand>
            <NavLinks>
                <Link to="/login">Entrar</Link>
                <Link to="/register">Registro</Link>
                {user?.role === "admin" && (
                    <Link to="/admin">Admin Dashboard</Link>
                )}
            </NavLinks>
        </Nav>
    )
}

export default Navbar