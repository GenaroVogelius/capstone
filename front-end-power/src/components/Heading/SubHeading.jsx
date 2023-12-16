





function SubHeading({ subHeading }) {


  let estado = subHeading().state
  let color = subHeading().color
    return (
      <h4>
        Actualmente tu cuota se encuentra
        <span style={{ color: color }}> {estado}</span>
      </h4>
    );
}


export default SubHeading