import { gsap } from "gsap";
import { useContext, useRef, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { DatosDeContexto } from "../../Context/Context";
import { StyledRutina } from "./StyledRutina";
import ShowExercise from "../ShowExercise/ShowExercise";

function Rutina({
  currentPage,
  setCurrentPage,
  indexClicked,
}) {

  const [showingExercise, setShowingExercise] = useState(false);
  const { dictDeRutinas } = useContext(DatosDeContexto);

  // accedes a la sesion de rutina a la cual se hizo click
  const rutinaDeSesion = dictDeRutinas[indexClicked];

  // mostras la el ejercicio de la rutina correspondiente a la currentPage
  const ejercicioInformation = rutinaDeSesion
    ? rutinaDeSesion[currentPage]
    : "";

  const [card, setCard] = useState(null);

  const animation = (XPercent, rotation) => {
    gsap.fromTo(
      card,
      { xPercent: XPercent, scale: 0.5, opacity: 0 },
      {
        duration: 0.9,
        xPercent: 0,
        zIndex: 0,
        opacity: 1,
        scale: 1,
        ease: "power3.out",
        rotation: 0,
      }
    );
  };

  function nextPage() {
    setCurrentPage((prev) => prev + 1);
    animation(100, 45);
  }

  function previousPage() {
    setCurrentPage((prev) => prev - 1);
    animation(-100, -45);
  }

  // mostras gif
  // !ver si se puede escribir distinto esto
  const gif = rutinaDeSesion
    ? rutinaDeSesion[currentPage].detalles_de_ejercicio.gif
    : "";

  // el contenido a paginar sera igual a la cantidad de arrays contenidos en la sesion.
  const contentToPagination = rutinaDeSesion ? rutinaDeSesion.length : 0;

  // ! POR QUE LO TENES QUE RENDERIZAR DIFERENTE EN DETALLES DE EJERCICIO
  return (
    <StyledRutina>
      <div className="card" ref={(element) => setCard(element)}>
        <p className="title">
          Ejercicio {currentPage + 1} / {contentToPagination}
        </p>
        <p className="info">
          {ejercicioInformation.detalles_de_ejercicio ? (
            ejercicioInformation.detalles_de_ejercicio.ejercicio
          ) : (
            <Skeleton />
          )}
        </p>
        <p className="title">Series</p>
        <p className="info">{ejercicioInformation.series || <Skeleton />}</p>
        <p className="title">Repeticiones</p>
        <p className="info">
          {ejercicioInformation.repeticiones || <Skeleton />}
        </p>
        {gif ? (
          <button
            className="btn-exercise"
            onClick={() => setShowingExercise(true)}
          >
            <span className="text">Ver Ejercicio</span>
          </button>
        ) : (
          ""
        )}
        {currentPage + 1 !== contentToPagination && ejercicioInformation ? (
          <div className="go-corner-right" onClick={() => nextPage()}>
            <div className="go-arrow">
              <svg viewBox="-100.9 99.1 61.9 105.9" width="14" height="14">
                <path d="m-41.7 145.3-43.5-43.5c-1.7-1.7-4-2.7-6.5-2.7s-4.8 1-6.5 2.7c-1.7 1.7-2.7 4-2.7 6.5s1 4.8 2.7 6.5L-61 152l-37.2 37.2c-1.7 1.7-2.7 4-2.7 6.5s1 4.8 2.6 6.5c1.8 1.9 4.2 2.8 6.6 2.8 2.3 0 4.6-.9 6.5-2.6 11.5-11.4 41.2-41 43.3-43l.2-.2c3.6-3.6 3.6-10.4 0-13.9z"></path>
              </svg>
              <path d="m-41.7 145.3-43.5-43.5c-1.7-1.7-4-2.7-6.5-2.7s-4.8 1-6.5 2.7c-1.7 1.7-2.7 4-2.7 6.5s1 4.8 2.7 6.5L-61 152l-37.2 37.2c-1.7 1.7-2.7 4-2.7 6.5s1 4.8 2.6 6.5c1.8 1.9 4.2 2.8 6.6 2.8 2.3 0 4.6-.9 6.5-2.6 11.5-11.4 41.2-41 43.3-43l.2-.2c3.6-3.6 3.6-10.4 0-13.9z"></path>
            </div>
          </div>
        ) : (
          ""
        )}
        {1 < currentPage + 1 && ejercicioInformation ? (
          <div className="go-corner-left" onClick={() => previousPage()}>
            <div className="go-arrow-left">
              <svg viewBox="-100.9 99.1 61.9 105.9" width="14" height="14">
                <path d="m-98.2 158.8 43.5 43.5c1.7 1.7 4 2.7 6.5 2.7s4.8-1 6.5-2.7c1.7-1.7 2.7-4 2.7-6.5s-1-4.8-2.7-6.5l-37.2-37.2 37.2-37.2c1.7-1.7 2.7-4 2.7-6.5s-1-4.8-2.6-6.5c-1.8-1.9-4.2-2.8-6.6-2.8-2.3 0-4.6.9-6.5 2.6-11.5 11.4-41.2 41-43.3 43l-.2.2c-3.6 3.6-3.6 10.3 0 13.9z"></path>
              </svg>
              <path d="m-98.2 158.8 43.5 43.5c1.7 1.7 4 2.7 6.5 2.7s4.8-1 6.5-2.7c1.7-1.7 2.7-4 2.7-6.5s-1-4.8-2.7-6.5l-37.2-37.2 37.2-37.2c1.7-1.7 2.7-4 2.7-6.5s-1-4.8-2.6-6.5c-1.8-1.9-4.2-2.8-6.6-2.8-2.3 0-4.6.9-6.5 2.6-11.5 11.4-41.2 41-43.3 43l-.2.2c-3.6 3.6-3.6 10.3 0 13.9z"></path>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      {showingExercise ? (
        <ShowExercise gif={gif} setShowingExercise={setShowingExercise} />
      ) : (
        ""
      )}
    </StyledRutina>
  );
}

export default Rutina;
