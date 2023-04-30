import './Header.css'
import logo from '../../../public/LOGO-PNG.png'

const Header = () => {
    return (
        <nav className='navbar'>
            <div>
                <img className="logo" src={logo} alt="brand" />
            </div>
            <div className='menu-link'>
                <a href="#">Home</a>
                <a href="#">Portfolio</a>
                <a href="#">Our Team</a>
            </div>
            <button className='contact-btn'><a href="#">Contact Us</a></button>
        </nav>
    );
};

export default Header;