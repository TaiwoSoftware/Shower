import BodyHeader from "./BodyHeader";
import BodyMain from "./BodyMain";
import BodyMainTwo from "./BodyMainTwo";
import VerticalLines from "./VerticalLines";
const BodyDetails = () => {
    return (
        <div className="bodyDetails">
            <BodyHeader />
            <BodyMain />
            <VerticalLines lines='verticalLines' />
            <VerticalLines lines='switcher' />
            <BodyMainTwo />
            
        </div>
    );
}

export default BodyDetails;
