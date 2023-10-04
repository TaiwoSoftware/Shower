import { useState } from "react";
import menu from "../images/Menu.svg";
import icon from "../images/Search.svg"
import FormContainer from "../FormContainer";
import Header from "./Header";
const Navbar = ({ img }) => {
  const [isToggled, setIsToggled] = useState(true);
  const [isShowing, setIsShowing] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled)
    setIsShowing(!isShowing)
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
          <img src={menu} onClick={handleToggle} alt="Menu-bar" className="menu-bar" />
        </div>
      </nav>

      <FormContainer toggle={isToggled ? 'toggleEvent':'displyEvent'} />
      <Header toggle={isShowing ? 'show' :'shower'} />
      {/* <MobileRegister toggle={isClicked} /> */}
      {/* {isClicked === true ? <MobileRegister toggle="displayEvent" /> : <MobileRegister toggle="toggleEvent" />} */}
      {/* {<MobileRegister toggle={display}  />} */}
    </div>
  );
};

export default Navbar;
