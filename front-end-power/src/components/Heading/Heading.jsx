import { useContext } from "react";
import Skeleton from "react-loading-skeleton";
import { DatosDeContexto } from "../../Context/Context";
import { StyledHeading } from "./StyledHeading";
import SubHeading from "./SubHeading";

function Heading({ first_word, second_word, subHeading }) {
  const { currentPath } = useContext(DatosDeContexto);

  // const { currentPath } = useContext(DatosDeContexto);
  // console.log(currentPath)

  return (
    <StyledHeading>
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
