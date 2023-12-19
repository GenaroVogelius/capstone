import { StyledFooter } from "./StyledFooter";

function Footer() {
  return (
    <StyledFooter>
      <footer className="footer-section mt-5">
        <div className="container">
          <div className="footer-cta pt-3 pb-3">
            <div className="row">
              <div className="col-xl-6 col-md-6 mb-30">
                <div className="single-cta">
                  <div className="cta-text">
                    <h4 className="mt-2">Seguinos</h4>
                    <a
                      href="https://www.instagram.com/powergimnasio/"
                      target="_blank"
                    >
                      <i
                        className="fab fa-instagram fa-2x mt-2"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-md-6 mb-30">
                <div className="single-cta">
                  <div className="cta-text">
                    <h4 className="mt-2">Contactanos</h4>
                    <div
                      className="d-flex align-items-end flex-wrap"
                      style={{ gap: "0.5rem" }}
                    >
                      <a href="https://wa.me/5493413035530" target="_blank">
                        <i className="fa-brands fa-whatsapp mt-2"></i>
                      </a>
                      <span>3413035530, Fernando</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-content pt-3 pb-3">
            <div className="row">
              <div className="col-xl-6 col-lg-6 mb-50">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <div className="cta-text">
                      <h4>
                        <i className="fas fa-map-marker-alt"></i> Encontranos
                      </h4>
                      <span>Urquiza 1383 Planta Alta, Rosario</span>
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.3327981290154!2d-60.64279897408029!3d-32.94222190640502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7ab3d392de75d%3A0x8b742bc4ef1bfd57!2sGImnasio%20Power%20by%20Fer%20Trainer!5e0!3m2!1ses!2sar!4v1695947428925!5m2!1ses!2sar"
                        className="map mt-1"
                        style={{ border: "0" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-6 col-lg-6 col-md-6 mb-50">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <div className="cta-text">
                      <h4 className="mb-3">Medios de pago</h4>
                      <div className="d-flex flex-wrap justify-content-between contMediosPagos">
                        <img
                          src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mercadopago@2x.png"
                          data-src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mercadopago@2x.png"
                          alt="mercadopago"
                        ></img>
                        <img
                          src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/visa@2x.png"
                          data-src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/visa@2x.png"
                          alt="visa"
                        ></img>
                        <img
                          src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mastercard@2x.png"
                          data-src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mastercard@2x.png"
                          alt="mastercard"
                        ></img>
                        <img
                          src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/banelco@2x.png"
                          data-src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/banelco@2x.png"
                          alt="ar_banelco"
                        ></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="text-center">
                <div className="copyright-text">
                  <p>
                    Copyright &copy; 2023, All Right Reserved{" "}
                    <a
                      href="https://www.linkedin.com/in/genaro-vogelius-3a9332142/"
                      target="_blank"
                    >
                      Desarrollador Genaro Vogelius
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </StyledFooter>
  );
}

export default Footer;
