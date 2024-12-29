import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <header>
            <nav>
                <NavLink to='/'>Home | </NavLink>
                <NavLink to='/signup'>Signup | </NavLink>
                <NavLink to='/signin'>Signin | </NavLink>
                <NavLink to='/products'>Products | </NavLink>
                <NavLink to='/about'>About</NavLink>
            </nav>
        </header>
    )
}

export default Header