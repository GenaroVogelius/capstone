import React, { useContext, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { DatosDeContexto } from "../../Context/Context";
import { StyledCarouselCustom, StyledImg } from "./StyledCarouselCustom";

function CarouselCustom() {
  const { getCarrouselPhotos, carrouselPhotos } = useContext(DatosDeContexto);

  useEffect(() => {
    if (!carrouselPhotos) {
      getCarrouselPhotos();
    }
  }, []);

  const imagenes = carrouselPhotos;

  return (
    <StyledCarouselCustom>
      <Carousel fade={true}>
        {imagenes &&
          imagenes.map((imagen, index) => (
            <Carousel.Item key={index} interval={5000}>
              <StyledImg
                className="d-block w-100"
                src={`https://res.cloudinary.com/drlw6rsyu/image/upload/f_auto,q_auto/v1/${imagen.foto_del_carrusel}`}
                alt="Logo Power"
                fluid="true"
              />
            </Carousel.Item>
          ))}
      </Carousel>
    </StyledCarouselCustom>
  );
}

export default CarouselCustom;
