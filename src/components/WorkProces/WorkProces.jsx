import './WorkingProces.css';
import workimg1 from '../../assets/image/working-img/1_v3.png';
import workimg2 from '../../assets/image/working-img/2_v2.png';
import workimg3 from '../../assets/image/working-img/3_v2.png';
import workimg4 from '../../assets/image/working-img/4_v2.png';
import workimg5 from '../../assets/image/working-img/5_v2.png';
const WorkProces = () => {
    return (
        <div className='working-method-sec'>
            <h2 className='services-titel'>Our Working Proces</h2>
            <div className='working-parant-box'>
                <div className='working-item-box'>
                    <img className='w-proces-img' src={workimg1} alt="" />
                    <div className='w-proces-info'>
                        <h2 className='w-proces-no1'>1</h2>
                        <h2 className='w-proces-title'>We receive the wishes and requirements of the customer</h2>
                    </div>
                </div>
                <div className='working-item-box working-item-2'>
                    <img className='w-proces-img' src={workimg2} alt="" />
                    <div className='w-proces-info'>
                        <h2 className='w-proces-no1'>2</h2>
                        <h2 className='w-proces-title'>We inventory The Project and analyze the requirements</h2>
                    </div>
                </div>
                <div className='working-item-box working-item-3'>
                    <img className='w-proces-img' src={workimg3} alt="" />
                    <div className='w-proces-info'>
                        <h2 className='w-proces-no1'>3</h2>
                        <h2 className='w-proces-title'>A first Mockup/Wireframe has been created</h2>
                    </div>
                </div>
                <div className='working-item-box working-item-4'>
                    <img className='w-proces-img' src={workimg4} alt="" />
                    <div className='w-proces-info'>
                        <h2 className='w-proces-no1'>4</h2>
                        <h2 className='w-proces-title'>All processes and Functions are implemented</h2>
                    </div>
                </div>
                <div className='working-item-box working-item-5'>
                    <img className='w-proces-img' src={workimg5} alt="" />
                    <div className='w-proces-info'>
                        <h2 className='w-proces-no1'>5</h2>
                        <h2 className='w-proces-title'>The project is extensively tested before delivery</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkProces;