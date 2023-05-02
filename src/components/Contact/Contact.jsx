
import './Contact.css';
import map from '../../assets/image/portfolio/map-img.png'
const Contact = () => {
    return (
        <div>
            <div className="contact-sec">
                <div className="contact-left-sec">
                    <img className='contact-img' src={map} alt="" />
                </div>
                <div className="contact-right-sec">
                    <form action="">
                        <div className='form-input'>
                            <input type="text" placeholder="Your Name*" required />
                            <input type="text" placeholder="Company Name" />
                            <input type="email" placeholder="Your Email Address*" required />
                            <input type="text" placeholder="Your Phone Number*" />
                        </div>
                        <textarea name="" id="" cols="30" rows="8">Tell us about your need</textarea>

                        <input className='sunmit-btn' type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;