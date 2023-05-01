
import './Brand.css'
import brand1 from '../../assets/image/brand-icon/11.png'
import brand2 from '../../assets/image/brand-icon/7.png'
import brand3 from '../../assets/image/brand-icon/5.png'
import brand4 from '../../assets/image/brand-icon/4.png'
import brand5 from '../../assets/image/brand-icon/22.png'

const Brand = () => {
    return (
        <div className='brand-section'>
            <div className='brand-cart'>
                <div className='brand-item'>
                    <img className='brand-icon' src={brand1} alt="brand1" />
                </div>
                <div className='brand-item'>
                    <img className='brand-icon' src={brand2} alt="brand1" />
                </div>
                <div className='brand-item'>
                    <img className='brand-icon' src={brand3} alt="brand1" />
                </div>
                <div className='brand-item'>
                    <img className='brand-icon' src={brand4} alt="brand1" />
                </div>
                <div className='brand-item'>
                    <img className='brand-icon' src={brand5} alt="brand1" />
                </div>
            </div>
        </div>
    );
};

export default Brand;