
import { StyledShowExercise } from "./StyledShowExercise";
import Button from "react-bootstrap/Button";
import BackGroundShadow from "../BackGroundShadow/BackGroundShadow";

function ShowExercise({ setShowingExercise, gif }) {
  return (
    <StyledShowExercise>
      <BackGroundShadow>
        <Button variant="danger" onClick={() => setShowingExercise(false)}>
          Cerrar
        </Button>{" "}
        <div
          class="image-card"
          style={{
            backgroundImage: `url(https://res.cloudinary.com/drlw6rsyu/f_auto,q_auto/v1/${gif})`,
          }}
        ></div>
      </BackGroundShadow>
    </StyledShowExercise>
  );
}



export default ShowExercise