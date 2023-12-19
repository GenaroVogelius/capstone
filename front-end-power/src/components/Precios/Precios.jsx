import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";
import Skeleton from "react-loading-skeleton";
import SpecialOffer from "./SpecialOffer.jsx";
import { StyledPrecios } from "./StyledPrecios";

function Precios({ promociones, completed }) {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

  const sectionRefs = promociones.map(() => useRef());


  useEffect(() => {
    // Array to store references to ScrollTriggers
    const scrollTriggers = [];

    if (
      typeof ScrollTrigger !== "undefined" &&
      completed
    ) {
      // Clear previous ScrollTriggers
      scrollTriggers.forEach((trigger) => trigger.kill());

      sectionRefs.forEach((ref, index) => {
        const trigger = gsap.to(ref.current, {
          scrollTrigger: {
            trigger: ref.current,
            start: "top-=50 top+=150",
            // markers: true,
            onToggle: ({ isActive }) => {
              if (isActive) {
                ref.current.classList.add("active");
              } else {
                ref.current.classList.remove("active");
              }
            },
          },
        });

        // Store the ScrollTrigger reference in the array
        scrollTriggers.push(trigger);
      });
    }

    // Cleanup when the component unmounts or when new triggers are added
    return () => {
      scrollTriggers.forEach((trigger) => trigger.kill());
    };
  }, [promociones, completed]);

  return (
    <StyledPrecios>
      <div id="generic_price_table">
        <section>
          <div className="container">
            <div className="row justify-content-center">
              {promociones && promociones.map((promo, index) => (
                <div key={index} className="col-lg-4 pt-3">
                  {promo.promociones_especiales &&
                  promo.promociones_especiales.length >= 1 ? (
                    <SpecialOffer text={promo.promociones_especiales} />
                  ) : (
                    ""
                  )}

                  <div
                    className="generic_content clearfix mb-5"
                    ref={sectionRefs[index]}
                  >
                    <div
                      className={`generic_head_price clearfix ${
                        promo ? "animationOn" : ""
                      }`}
                    >
                      <div className="generic_head_content clearfix">
                        <div className="head_bg"></div>
                        <div className="head">
                          <span>{promo.tipo_de_tarifa || <Skeleton />}</span>
                        </div>
                      </div>

                      <div className="generic_price_tag clearfix">
                        <span className="price">
                          <span className="sign">$</span>
                          <span className="currency">
                            {promo.precio || <Skeleton />}
                          </span>
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

export default Precios;
