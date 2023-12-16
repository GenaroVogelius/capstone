import { StyledBackGroundShadow } from "./StyledBackGroudShadow";

function BackGroundShadow({ children }) {
  return (
    <StyledBackGroundShadow>
      <div className="shadow">{children}</div>
    </StyledBackGroundShadow>
  );
}

export default BackGroundShadow;
