
import { StyledShowExercise } from "./StyledShowExercise";
import Button from "react-bootstrap/Button";
import BackGroundShadow from "../BackGroundShadow/BackGroundShadow";

function ShowExercise({ setShowingExercise, gif }) {
  return (
    <StyledShowExercise>
      <BackGroundShadow>
        <div
          class="image-card"
          style={{
            backgroundImage: `url(https://res.cloudinary.com/drlw6rsyu/f_auto,q_auto/v1/${gif})`,
          }}
        ></div>
        <Button variant="danger" onClick={() => setShowingExercise(false)}>
          Cerrar
        </Button>
      </BackGroundShadow>
    </StyledShowExercise>
  );
}



export default ShowExercise