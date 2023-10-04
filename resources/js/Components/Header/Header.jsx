import logo from '../image/logo.png'
import HeaderDetails from './HeaderDetails';
import Navbar from './Navbar';
const Header = () => {
    return (
        <header>
            <Navbar img={logo} />
            <HeaderDetails />
        </header>
    );
}

export default Header;
