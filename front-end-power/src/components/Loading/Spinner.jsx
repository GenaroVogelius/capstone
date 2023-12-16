import { StyledSpinner } from "./StyledSpinner";


function Spinner() {
    
    return (
      <StyledSpinner>
        <div className="loader">
          <div className="justify-content-center jimu-primary-loading"></div>
        </div>
      </StyledSpinner>
    );
}


export default Spinner