import React from "react";
import ReactDOM from "react-dom";
import propTypes from "prop-types";
const array = ["Peras", "Manzanas", "Sandias"];
// const render = (
//   <ol>
//     <li>{array[0]}</li>
//     <li>{array[1]}</li>
//     <li>{array[2]}</li>
//   </ol>
// );
const Parrafo = () => <p>Lorem solo</p>;
const Lista = () => (
  <ol>
    <li>{array[0]}</li>
    <li>{array[1]}</li>
    <li>{array[2]}</li>
  </ol>
);
const elemento = <h1>Hola mundo</h1>;
const elemento2 = "ELEMENTO 2";
const TituloFrutas = (props) => {
// Otra forma const TituloFrutas = ({titulo, id}) => { // -> Desestructuracion implícita 
  const { titulo = "Aca va un titulo", id } = props; // esto es una desestructuracion de props
  return (
    <>
      <h1>{titulo}</h1>
      <p>El id es: {id}</p>
    </>
  );
};
TituloFrutas.propTypes = {
  //  el titulo se utiliza para .....
  titulo: propTypes.string,
  // el ID toma el valor de ..... Es requerido porque .....
  id: propTypes.number.isRequired,
  /*  casado: propTypes.bool,
  array: propTypes.array,
  objetos1: propTypes.object
*/
};
const Frutas = () => {
  const Subtitulo = ({ num }) => <h4>{num * 2}</h4>;
  return (
    <>
      {elemento}
      <div>{elemento2}</div>
      <TituloFrutas />
      <Subtitulo num={5} />
      <Parrafo />
      <Lista />
    </>
  );
};
// const OtrasFrutas = () => {
//   return ( 
//     <>
//     <h1>Frutas:</h1>
//     <ol>
//       <li>Manzana</li>
//       <li>Pera</li>
//       <li>Banana</li>
//     </ol>
//       </>
//    );
// };

ReactDOM.render(
  // <>
  <Frutas />,
  // <OtrasFrutas />,
  //  </>,
  /*
  render,
  React.createElement(
    "ol",
    null,
    React.createElement("li", null, array[0]),
    React.createElement("li", null, array[1]),
    React.createElement("li", null, array[2])
  )*/ document.getElementById(
    "root"
  )
);



