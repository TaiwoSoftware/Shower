import HeaderImg from "./HeaderImg";
import RegisterButton from "./RegisterButton";

const HeaderDetails = ({toggleHeader}) => {
  return (
    <div className={toggleHeader}>
      <div className="main-header">
      <div className="header">
        <h1>SHOWER</h1>
        <p>
          We have joined heads together on this website for you to get advice
          concerning your talent
        </p>
      </div>
      <HeaderImg />
      <RegisterButton title="Check " />
      
    </div>
    </div>
  );
};

export default HeaderDetails;
