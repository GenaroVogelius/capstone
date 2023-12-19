import { useContext } from "react";
import { DatosDeContexto } from "../../Context/Context";

function EntranceForm({ setUserData, setIsLoading }) {
  const { baseURL } = useContext(DatosDeContexto);

  function handleSubmit(event) {
    setIsLoading(true);
    event.preventDefault();
    // ? como le pusiste un name al input asi lo podes llamar despues del .target
    let input = event.target.input_dni;
    let dniValue = event.target.input_dni.value;
    const getUserState = async () => {
      try {
        const response = await fetch(`${baseURL}admin_usuario/${dniValue}`);
        const data = await response.json();
        setIsLoading(false);
        setUserData(data);

        input.value = "";
      } catch (error) {
        console.log("Error:", error.message);
      }
    };
    getUserState();

    fetch(`${baseURL}admin_usuario/${dniValue}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="user-box">
        <label>Ingrese su D.N.I</label>
        <input
          className="input"
          type="text"
          required
          name="input_dni"
          autoFocus
          autoComplete="off"
        />
      </div>
    </form>
  );
}

export default EntranceForm;
