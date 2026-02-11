import { NavLink } from "react-router-dom";


const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <NavLink to="/" className={"nav-link"} >Inicio</NavLink>
                <NavLink to="/profile" className={"nav-link"}>Perfil</NavLink>
                <NavLink to="/products" className={"nav-link"} >Productos</NavLink>
                <NavLink to="/signUp" className={"nav-link"}>Sign Up</NavLink>
                <NavLink to="/signIn" className={"nav-link"}>Sign In</NavLink>
                <NavLink to="/logOut" className={"nav-link"}>Log Out</NavLink>
                <NavLink to="/pruebaSupabase" className={"nav-link"}>Prueba Supabase</NavLink>
            </div>
        </nav>
    );
};

export default NavBar;