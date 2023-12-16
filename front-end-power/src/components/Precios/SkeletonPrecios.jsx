import { StyledPrecios } from "./StyledPrecios";
import SpecialOffer from "./SpecialOffer.jsx";
import Skeleton from "react-loading-skeleton";

function SkeletonPrecios() {
    const promos = [
      {
        precio: "Cargando...",
        tipo_de_tarifa: "Cargando...",
        promociones_especiales: [],
      },
      {
        precio: "Cargando...",
        tipo_de_tarifa: "Cargando...",
        promociones_especiales: [],
      },
      ,
      {
        precio: "Cargando...",
        tipo_de_tarifa: "Cargando...",
        promociones_especiales: [],
      },
    ];
  return (
    <StyledPrecios>
      <div id="generic_price_table">
        <section>
          <div className="container">
            <div className="row justify-content-center">
              {promos.map((promo, index) => (
                <div key={index} className="col-lg-4 pt-3">
                  {promo.promociones_especiales.length >= 1 ? (
                    <SpecialOffer text={promo.promociones_especiales} />
                  ) : null}

                  <div className="generic_content clearfix mb-5">
                    <div className="generic_head_price clearfix">
                      <div className="generic_head_content clearfix">
                        <div className="head_bg"></div>
                        <div className="head">
                          <span>
                            <Skeleton />
                          </span>
                        </div>
                      </div>

                      <div className="generic_price_tag clearfix">
                        {" "}
                        <span className="price">
                          <span className="sign">$</span>
                          <span className="currency"><Skeleton/></span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </StyledPrecios>
  );
}

export default SkeletonPrecios;
