import { StyledVencimiento } from "./StyledVencimiento";
import Card from "react-bootstrap/Card";

function Vencimiento({ daysDiff, formattedDateString, cuotaState }) {
  const colorState = cuotaState
  const dias = daysDiff;
  const percent = dias < 0 ? (-dias / 40) * 100 : (dias / 40) * 100;
  
  return (
    <StyledVencimiento>
      <Card>
        <div className="d-flex align-items-center justify-content-between">
          <p className="h5 title-text bold-text mb-0">Vencimiento</p>
          <p
            className={`h5 percent mb-0 text-center ${
              dias ? "animationOn" : ""
            }`}
            style={{ color: colorState }}
          >
            {dias}{" "}
            {dias !== "" ? (dias !== 1 || dias !== -1 ? "Días" : "Día") : ""}
          </p>
        </div>
        <div className="data">
          <p className={`h3 text-center ${dias ? "animationOn" : ""}`}>
            {formattedDateString || <Skeleton />}
          </p>
          <div className="range">
            <div
              className="fill"
              style={{ backgroundColor: colorState, width: `${percent}%` }}
            ></div>
          </div>
        </div>
      </Card>
    </StyledVencimiento>
  );
}

export default Vencimiento;
