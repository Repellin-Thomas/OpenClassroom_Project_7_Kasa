import logo from '../../assets/footerlogo.png'
import '../../style/Footer.css'





function Footer() {
    return (
        <div className='footer-container'>
            <div className='img-container'><img src={logo} alt='footer logo' /></div>
            <span className='footer-text'>© 2020 Kasa. All rights reserved</span>
        </div>
    )
}

export default Footer