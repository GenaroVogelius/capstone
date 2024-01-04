import Skeleton from "react-loading-skeleton";
import { StyledHeading } from "./StyledHeading";
import SubHeading from "./SubHeading";

function Heading({ first_word, second_word, paddingtop, subHeading }) {
  return (
    <StyledHeading paddingtop={paddingtop}>
      <div className="site-heading text-center">
        <h2>
          {first_word || <Skeleton />}
          <span> {second_word || <Skeleton />}</span>
        </h2>
        {subHeading && <SubHeading subHeading={subHeading} />}
      </div>
    </StyledHeading>
  );
}

export default Heading;
