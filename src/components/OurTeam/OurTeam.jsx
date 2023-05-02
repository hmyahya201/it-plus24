
import './OurTeam.css';
import teamimg from '../../assets/image/portfolio/teamwork.png'
const OurTeam = () => {
    return (
        <div className='team-section'>
            <div className="team-w-box"> 
                <div className="team-w-box-left">
                    <h3 className='services-titel team-title'>Our strong team helps you to Succeed</h3>
                    <p className='services-descriptin team-des'>Our team consists of young ambitious professionals who do everything they can to meet your expectations. We do not shy away from challenges and often go beyond what is necessary to ensure that you are satisfied with the end result.</p>      
                </div>
                <div className="team-w-box-right">
                    <img className='team-img' src={teamimg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default OurTeam;