import './Portfolio.css';
import portfolio1 from '../../assets/image/portfolio/kneakApp1.png';
import portfolio2 from '../../assets/image/portfolio/tdev.png';
import portfolio3 from '../../assets/image/portfolio/lesApp.png';
import portfolio4 from '../../assets/image/portfolio/les.png';
import portfolio5 from '../../assets/image/portfolio/ggto-usecase.png';
const Portfolio = () => {
    return (
        <div className='portfolio-section'>
            <h2 className='services-titel'>Our Portfolio</h2>
            <p className='services-descriptin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ab quis deleniti inventore quas error.</p>
            <div className='portflio-cart'>
                <div className='portfolio-item p-item-1'>
                    <img className='portfolio-img' src={portfolio1} alt="" />
                    <div className='p-item-box1'>
                        <h2 className='p-item-title'><span className='p-item-title-head'>Translation Dev</span> <br/>Translation Tool for Website</h2>
                    </div>
                </div>
                <div className='portfolio-item p-item-2'>
                    <img className='portfolio-img' src={portfolio2} alt="" />
                    <div className='p-item-box2'>
                        <h2 className='p-item-title'><span className='p-item-title-head'>Translation Dev</span> <br/>Translation Tool for Website</h2>
                    </div>
                </div>
                <div className='portfolio-item p-item-3'>
                    <img className='portfolio-img' src={portfolio3} alt="" />
                    <div className='p-item-box3'>
                        <h2 className='p-item-title'><span className='p-item-title-head'>Translation Dev</span> <br/>Translation Tool for Website</h2>
                    </div>
                </div>
                <div className='portfolio-item p-item-4'>
                    <img className='portfolio-img' src={portfolio4} alt="" />
                    <div className='p-item-box4'>
                        <h2 className='p-item-title'><span className='p-item-title-head'>Translation Dev</span> <br/>Translation Tool for Website</h2>
                    </div>
                </div>
                <div className='portfolio-item p-item-5'>
                    <img className='portfolio-img' src={portfolio5} alt="" />
                    <div className='p-item-box5'>
                        <h2 className='p-item-title'><span className='p-item-title-head'>Translation Dev</span> <br/>Translation Tool for Website</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;