import logo from '../image/logo.png'
import HeaderDetails from './HeaderDetails';
import Navbar from './Navbar';
const Header = ({toggle}) => {
    return (
        <header className={toggle}>
            <Navbar img={logo} />
            <HeaderDetails />
        </header>
    );
}

export default Header;
