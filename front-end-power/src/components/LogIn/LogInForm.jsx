import { useContext, useEffect } from "react";
import { Toaster } from "sonner";
import { DatosDeContexto } from "../../Context/Context";
import LoadingBox from "../Loading/LoadingBox";
import { StyledLogInForm } from "./StyledLogInForm";

function LogInForm() {
  const { loginUser, loading, setLoading } = useContext(DatosDeContexto);

  useEffect(() => {
    setLoading(false);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const dni = e.target.DNI.value;
    const password = e.target.password.value;
    loginUser(dni, password);
    e.target.reset();
  };

  return (
    <StyledLogInForm>
      <section className="signup-section pt-5 pb-5 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="signup-area">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="signup-left-area">
                      <h2 className="title">Iniciar Sesión</h2>
                      <p>
                        Consulta tus datos de asociado, tu rutina personalizada
                        y tus vencimientos.
                      </p>
                      <div className="sign-up-form-area">
                        <form className="signup-form" onSubmit={handleSubmit}>
                          <div className="row">
                            <div className="mt-2 col-lg-12 form-group">
                              <input
                                type="text"
                                name="DNI"
                                placeholder="DNI"
                                required
                              />
                            </div>

                            <div className="mt-2 col-lg-12 form-group">
                              <input
                                type="password"
                                id="myInput"
                                name="password"
                                placeholder="contraseña"
                                required
                              />
                            </div>

                            <div className="mt-3 col-lg-12 form-group">
                              <input
                                type="submit"
                                className="cmn-btn"
                                value="Ingresar"
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Toaster position="top-center" richColors />
      </section>

      {loading ? <LoadingBox /> : ""}
    </StyledLogInForm>
  );
}

// //  signup-element
// width: 100 %;
//     height: 100%;
//     object-fit: cover;
//     z-index: -5;

export default LogInForm;
