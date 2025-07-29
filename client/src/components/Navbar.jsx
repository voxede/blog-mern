import styled from "styled-components"
import { Link } from "react-router-dom"
import { useTheme } from "styled-components"

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
    const theme = useTheme()
    console.log(theme)

    return (
        <Nav>
            <NavBrand to="/">Blog MERN</NavBrand>
            <NavLinks>
                <Link to="/">Home</Link>
                <Link to="/blog">Blog</Link>
            </NavLinks>
        </Nav>
    )
}

export default Navbar