import LoadingLetters from "./LoadingLetters";
import { StyledLoadingBox } from "./StyledLoadingBox"
import BackGroundShadow from "../BackGroundShadow/BackGroundShadow";

function LoadingBox() {
  return (
    <StyledLoadingBox>
      <BackGroundShadow>
          <LoadingLetters />
        <div className="loader-bar"></div>
      </BackGroundShadow>
    </StyledLoadingBox>
  );
}

export default LoadingBox;
