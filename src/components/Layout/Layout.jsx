
import Header from '../Header/Header';
import Home from '../Home/Home';
import OurServices from './../OurServices/OurServices';
import Portfolio from './../Portfolio/Portfolio';
import WorkProces from './../WorkProces/WorkProces';
import OurTeam from './../OurTeam/OurTeam';
import Contact from './../Contact/Contact';

const Layout = () => {
    return (
        <div>
            <Header></Header>
            <Home></Home>
            <OurServices></OurServices>
            <Portfolio></Portfolio>
            <WorkProces></WorkProces>
            <OurTeam></OurTeam>
            <Contact></Contact>
        </div>
    );
};

export default Layout;