import LoadingLetters from "./LoadingLetters";
import { StyledLoadingBox } from "./StyledLoadingBox";
import BackGroundShadow from "../BackGroundShadow/BackGroundShadow";

function HorizontalLoading() {
  return (
    <StyledLoadingBox>
      <LoadingLetters />
    </StyledLoadingBox>
  );
}

export default HorizontalLoading;
