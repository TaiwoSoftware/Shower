import { useState } from "react";
import MobileRegister from "../MobileRegister";
import menu from "../images/Menu.svg";
import icon from "../images/Search.svg"
const Navbar = ({ img }) => {
  const [isToggled, setIsToggled] = useState(true);

  const handleToggle = () => {
    setIsToggled(!isToggled)
  }

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
          <img src={menu} alt="Menu-bar" className="menu-bar" />
        </div>
      </nav>

      <MobileRegister toggle={isToggled ? 'toggleEvent':'displyEvent'} />
      {/* <MobileRegister toggle={isClicked} /> */}
      {/* {isClicked === true ? <MobileRegister toggle="displayEvent" /> : <MobileRegister toggle="toggleEvent" />} */}
      {/* {<MobileRegister toggle={display}  />} */}
    </div>
  );
};

export default Navbar;
