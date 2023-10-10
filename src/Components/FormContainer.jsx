import MobileRegister from "./MobileRegister";
import searchIcon from "./images/Search.svg";
const FormContainer = ({ toggli }) => {
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
        <button>Register</button>
      </div>
    </div>
  );
};

export default FormContainer;
