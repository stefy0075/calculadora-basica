import React from "react";
import '../hojas-de-estilo/shadow.css'

function Boton(props) {
  const esOperador = (valor) => {
    return isNaN(valor) && valor !== "." && valor !== "=";
  };

  return (
    <button
      className={` shadowcss h-[55px] flex flex-1 justify-center items-center font-bold font-[30px] bg-[#1b1b32] text-white border-2 border-black rounded-[25px]
      m-[3px] cursor-pointer select-none hover:bg-grey-900 ${
        esOperador(props.children) ? "bg-quaternary hover:bg-[#ff6600] shadowcss" : ""
      }`.trimEnd()}
      onClick={() => props.manejarClic(props.children)}
    >
      {props.children}
    </button>
  );
}

export default Boton;
