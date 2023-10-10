import { useState } from "react";
import MobileRegister from "./MobileRegister";
import searchIcon from "./images/Search.svg";
const FormContainer = ({ toggli }) => {
  const [register, setRegister] = useState(false);

  const handleClick = () => {
    console.log("Clicked");
  };

  const handleClickAgain = () => {
    setRegister(!register);
  };
  return (
    <div className={toggli}>
      <div className="toggler">
        <div className="searching" onClick={handleClick}>
          <p>Search</p>
          <img src={searchIcon} alt="Search" />
        </div>
        <button className="again" onClick={handleClickAgain}>
          Register
        </button>
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
