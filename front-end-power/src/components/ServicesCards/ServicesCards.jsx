import { useContext, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { DatosDeContexto } from "../../Context/Context";
import { StyledServicesCards } from "./StyledServicesCards";

function ServicesCards() {
  const { getServicios, servicios } = useContext(DatosDeContexto);

  useEffect(() => {
    if (!servicios) {
      getServicios();
    }

    return () => {};
  }, []);

  const serviciosCards = servicios ? servicios : Array(6).fill(0);

  return (
    <StyledServicesCards>
      <section className="we-offer-area text-center bg-gray">
        <div className="container">
          <div className="row our-offer-items less-carousel">
            {serviciosCards.map((servicio, index) => (
              <div key={index} className="col-md-4 col-sm-6 equal-height">
                <div className="item d-flex flex-column flex-wrap align-items-center">
                  <i className={servicio.flaticon}></i>
                  <h4>{servicio.titulo || <Skeleton />}</h4>
                  <p>{servicio.descripcion || <Skeleton count={5} />}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </StyledServicesCards>
  );
}

export default ServicesCards;
