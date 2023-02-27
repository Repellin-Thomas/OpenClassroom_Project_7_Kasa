import logo from '../../assets/headerlogo.png'
import '../../style/Header.css'
import { Link } from "react-router-dom"




function Header() {
    return (
        <div className='header-container'>
            <div className='img-container'><img src={logo} alt='logo' /></div>
            <nav className='header-nav'>
                <Link to='/' className='nav-link'>Accueil</Link>
                <Link to='/à-propos' className='nav-link'>A propos</Link>
            </nav>
        </div>
    )

};

export default Header