import { StyledBackGroundShadow } from "./StyledBackGroudShadow";

function BackGroundShadow({ backgroundColor, children }) {
  return (
    <StyledBackGroundShadow backgroundColor={backgroundColor}>
      <div className="shadow">{children}</div>
    </StyledBackGroundShadow>
  );
}

export default BackGroundShadow;
