import { StyledAccordion } from "./StyledAccordion";

import React, { useContext, useEffect, useState } from "react";
import { DatosDeContexto } from "../../Context/Context";
import Rutina from "../Rutina/Rutina";

function AccordionCustom() {
  const { getSesiones, sesionesCount, getRutina, dictDeRutinas } =
    useContext(DatosDeContexto);

  useEffect(() => {
    getSesiones();
  }, []);

  const [currentPage, setCurrentPage] = useState(0);

  const [indexClicked, setIndexClicked] = useState(null);

  const defaultSesionesCount = Array(5).fill(0);

  const sesionesCards = sesionesCount
    ? sesionesCount.sesiones
    : defaultSesionesCount;

  const initialAriaStates = new Array(sesionesCards).fill(false);

  const [ariaExpandedStates, setAriaExpandedStates] =
    useState(initialAriaStates);

  const [lastCardClicked, setLastCardClicked] = useState();

  function handleClickedAccordion(index) {
    setIndexClicked(index + 1);

    // estableces la ultima tarjeta que se hizo click
    setLastCardClicked(index);

    // estableces la pagina a mostrar
    setCurrentPage(0);

    // si es que no esta presente esa sesion se la solicta al back-end
    if (!dictDeRutinas.hasOwnProperty(index + 1)) {
      // se solicita la rutina de la sesion
      getRutina(index + 1);
    }
  }

  const toggleAccordion = (index) => {
    // inicializas la variable fuera de los condicionales porque sino no te funcionaba
    let newAriaStates;

    // significa que queres cerrar una tarjeta que ya abriste
    if (lastCardClicked === index) {
      // creas una lista con todos los valores en falso
      newAriaStates = [...ariaExpandedStates];

      // si es true pasa a ser false y viceversa
      newAriaStates[index] = !newAriaStates[index];
    }

    // significa que queres abrir una nueva tarjeta
    else {
      // creas una lista con todos los valores en falso
      newAriaStates = [...initialAriaStates];

      // si es true pasa a ser false y viceversa
      newAriaStates[index] = !newAriaStates[index];
    }

    // se setea el valor de aria expended states
    setAriaExpandedStates(newAriaStates);

    handleClickedAccordion(index);

     const expandedElement = document.getElementById(
       `accordion${sesionesCards[index]}`
    );
    
  };

  return (
    <StyledAccordion>
      <div className="container">
        <div className="accordion">
          {sesionesCards.map((sesion, index) => (
            <dl key={index}>
              <dt>
                <a
                  aria-expanded={ariaExpandedStates[index]}
                  aria-controls={`accordion${sesion}`}
                  className={`accordion-title accordionTitle js-accordionTrigger ${
                    ariaExpandedStates[index] ? "is-expanded" : "is-collapsed"
                  }`}
                  onClick={sesionesCount && (() => toggleAccordion(index))}
                >
                  {sesionesCount ? `Sesión ${index + 1}` : "cargando..."}
                </a>
              </dt>
              <dd
                className={`accordion-content accordionItem ${
                  ariaExpandedStates[index] ? "is-expanded" : "is-collapsed"
                }`}
                id={`accordion${sesion}`}
                aria-hidden={!ariaExpandedStates[index]}
              >
                <Rutina
                  indexClicked={indexClicked}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />
              </dd>
            </dl>
          ))}
        </div>
      </div>
    </StyledAccordion>
  );
}

export default AccordionCustom;
