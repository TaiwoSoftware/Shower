import { useState } from "react";
import menu from "../images/Menu.svg";
import icon from "../images/Search.svg";
import MobileRegister from "../MobileRegister";
import FormContainer from "../FormContainer";
const Navbar = ({ img }) => {
  const [isToggled, setIsToggled] = useState(true);
  const [isShowing, setIsShowing] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleToggle = () => {
    if (window.innerWidth <= 900) {
      console.log('Your browser width is less than 900');
      // setIsToggled(!isToggled);
      // setIsShowing(!isShowing);
      setIsClicked(!isClicked);

    }
  };

  return (
    <div>
      <nav>
        <div className="searchDiv">
          <input type="search" placeholder="What are you looking for" />
          <button type="submit">
            <img src={icon} alt="search-icon" />
          </button>
        </div>
        <div className="register">
        <img src={menu} onClick={handleToggle} alt="Menu-bar" className="menu-bar "/> 
          
        </div>
      </nav>

      {/* {isClicked === true ? <MobileRegister toggle="displayEvent" /> : <MobileRegister toggle="toggleEvent" />} */}
      {isClicked === true ? <FormContainer toggli="displayEvent"/> : <FormContainer toggli="toggleEvent" />}
      {/* {<MobileRegister toggle={display}  />} */}
    </div>
  );
};

export default Navbar;
