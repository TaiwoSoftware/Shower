import { useState } from "react";
import MobileRegister from "./MobileRegister";
import searchIcon from "./images/Search.svg";
import HeaderDetails from "./Header/HeaderDetails";
import ToggleButton from "./Header/ToggleButton";
const FormContainer = ({ toggli }) => {
  const [register, setRegister] = useState(false);
  
  const handleClick = () => {
    console.log("Clicked");
  };

  
  return (
    <div className={toggli}>
      <div className="toggler">
        <div className="searching" onClick={handleClick}>
          <p>Search</p>
          <img src={searchIcon} alt="Search" />
        </div>
        {/* <ToggleButton handleClicks={handleClickAgain} /> */}
        {register === true ? (
          <MobileRegister toggle="displayEvent" />
        ) : (
          <MobileRegister toggle="toggleEvent" />
        )}

        
      </div>
    </div>
  );
};

export default FormContainer;
