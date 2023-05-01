import './Services.css'
import advice from '../../assets/image/icons/teamwork-together-icon.svg'
import brand from '../../assets/image/icons/brand-identity-icon.svg'
import devlopment from '../../assets/image/icons/web-page-icon.svg'
import apps from '../../assets/image/icons/mobile-app-dev-icon.svg'
const OurServices = () => {
    return (
        <div className='sevices-section'>
            <h2 className='services-titel'>Our Services</h2>
            <p className='services-descriptin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ab quis deleniti inventore quas error.</p>
            <div className='services-cart-sec'>
                <div className='services-cart'>
                    <img className='advise-icon' src={advice} alt="advice-icon" />
                    <h2 className='cart-title'>To Advise</h2>
                    <p className='cart-des'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, debitis.</p>
                </div>
                <div className='services-cart'>
                    <img className='advise-icon' src={brand} alt="advice-icon" />
                    <h2 className='cart-title'>To Advise</h2>
                    <p className='cart-des'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, debitis.</p>
                </div>
                <div className='services-cart'>
                    <img className='advise-icon' src={devlopment} alt="advice-icon" />
                    <h2 className='cart-title'>To Advise</h2>
                    <p className='cart-des'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, debitis.</p>
                </div>
                <div className='services-cart'>
                    <img className='advise-icon' src={apps} alt="advice-icon" />
                    <h2 className='cart-title'>To Advise</h2>
                    <p className='cart-des'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, debitis.</p>
                </div>
            </div>
        </div>
    );
};

export default OurServices;