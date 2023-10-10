import { useState } from "react";
import MobileRegister from "../MobileRegister";
const ToggleButton = ({ handleClicks }) => {
  const [register, setRegister] = useState(false);

  return (
    <div>
      <button className="again" onClick={handleClicks}>
        Register
      </button>
      {register === true ? (
        <MobileRegister toggle="displayEvent" />
      ) : (
        <MobileRegister toggle="toggleEvent" />
      )}

      
    </div>
  );
};

export default ToggleButton;
