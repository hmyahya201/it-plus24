
import Header from '../Header/Header';
import Home from '../Home/Home';
import OurServices from './../OurServices/OurServices';
import Portfolio from './../Portfolio/Portfolio';
import WorkProces from './../WorkProces/WorkProces';
import OurTeam from './../OurTeam/OurTeam';
import Contact from './../Contact/Contact';
import Brand from '../Brand/Brand';
import Footer from '../Footer/Footer';

const Layout = () => {
    return (
        <div>
            <Header></Header>
            <Home></Home>
            <Brand></Brand>
            <OurServices></OurServices>
            <Portfolio></Portfolio>
            <WorkProces></WorkProces>
            <OurTeam></OurTeam>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Layout;