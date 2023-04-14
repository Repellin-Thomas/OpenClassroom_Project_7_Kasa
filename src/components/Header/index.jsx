import logo from '../../assets/headerlogo.png'
import './Header.css'
import { Link } from "react-router-dom"




function Header() {
    return (
        <div className="header-container">
            <div className="img-container"><img src={logo} alt="logo" className="logo" /></div>
            <nav className="header-nav">
                <Link to="/" className="nav-link">Accueil</Link>
                <Link to="/a-propos" className="nav-link">À propos</Link>
            </nav>
        </div>
    )

};

export default Header