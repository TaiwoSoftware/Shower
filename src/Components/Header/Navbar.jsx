import { useState } from "react";
import menu from "../images/Menu.svg";
import icon from "../images/Search.svg";
import MobileRegister from "../MobileRegister";
import FormContainer from "../FormContainer";
import HeaderDetails from "./HeaderDetails";
const Navbar = () => {
 

  const [isClicked, setIsClicked] = useState(false);

  const handleToggle = () => {
    if (window.innerWidth <= 900) {
      console.log(`Your browser width is  ${window.innerWidth}`);
      setIsClicked(!isClicked);
    }
  };
  const handleClickAgain = () => {
    setRegister(!register);
    setDisplayHeader(!displayHeader);
  };

  return (
    <div>
      <nav>
        <div className="searchDiv">
          <input type="text" placeholder="What are you looking for" />
          <button type="submit">
            <img src={icon} alt="search-icon" />
          </button>
        </div>
        <div className="register">
          <img
            src={menu}
            onClick={handleToggle}
            alt="Menu-bar"
            className="menu-bar "
          />
        </div>
      </nav>
      {isClicked === true ? (
        <FormContainer toggli="displayEvent" />
      ) : (
        <FormContainer toggli="toggleEvent" />
      )}
      
    </div>
  );
};

export default Navbar;
