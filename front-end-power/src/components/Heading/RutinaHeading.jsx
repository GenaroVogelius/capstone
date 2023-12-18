import { StyledRutinaHeading } from "./StyledRutinaHeading";


function RutinaHeading({text}) {
    

    return (
      <StyledRutinaHeading>
        <h3 className="text-center mt-5 mb-4">{text}</h3>
      </StyledRutinaHeading>
    );
}


export default RutinaHeading