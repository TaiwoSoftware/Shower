import RoundedButton from "./RoundedButton";
import VerticalLines from "./VerticalLines";
import gathering from '../imagi/8046554 1.svg';
const Target = () => {
  return (
    <div className="target">
      <h1>OUR AIM</h1>
      <div className="mainTarget">
        <p className="leftP">Rendering the right advice for everyone</p>
        <RoundedButton num={1} />

        <VerticalLines lines="verticalLines margin" />
        <p className="rightP">Keep record of all request</p>
        <RoundedButton num={2} />

        <VerticalLines lines="verticalLines margin" />
        <p className="leftT">Give a different advice for similar request</p>
        <RoundedButton num={3} />
      </div>
      <img src={gathering} className="gathering" alt="listing-image" />
    </div>
  );
};

export default Target;
