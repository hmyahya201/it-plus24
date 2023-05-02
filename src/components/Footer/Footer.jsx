
import './Footer.css';
import { Link } from 'react-router-dom';
import logo from '/LOGO-PNG.png'
const Footer = () => {
    return (
        <div className='footer-sec'>
            <div className='footer-box'>
                <div className='footer-info'>
                    <img className='footer-logo' src={logo} alt="" />
                    <p className='footer-descriptin'>IT-plus24 is an experienced IT service provider that focuses on various industries and serves customers ranging from small to large companies. Our expertise includes designing, building and maintaining IT environments.</p>
                </div>
                <div className='footer-right'>
                    <div className='footer-item footer-contact'>
                        <h2 className='footer-contact-head'>Contact</h2>
                        <h3 className='footer-contact-title'>Address</h3>
                        <p className='footer-contact-des'>IJplein 420 1021 LW Amsterdam</p>
                        <h3 className='footer-contact-title'>phone</h3>
                        <p className='footer-contact-des'>+31 85 060 4608</p>
                        <h3 className='footer-contact-title'>E-mail</h3>
                        <p className='footer-contact-des'>info@it-plus24.com</p>
                    </div>
                    <div className='footer-item footer-link'>
                        <h2 className='footer-shortcut-head'>Shortcuts</h2>

                        <div className='footer-menu'>
                            <Link className='footer-menu-link ' to="/">Home</Link>
                            <Link className='footer-menu-link ' to="/portfolio">Portfolio</Link>
                            <Link className='footer-menu-link ' to="/ourTeam">Our Team</Link>
                            <Link className='footer-menu-link ' to="/contact">Contact</Link>
                        </div> 
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Footer;