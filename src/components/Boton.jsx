import React from "react";
import '../style/shadow.css'

function Boton(props) {
  const esOperador = (valor) => {
    return isNaN(valor) && valor !== "." && valor !== "=";
  };

  return (
    <button
      className={`shadowcss h-[55px] flex flex-1 justify-center items-center font-bold font-[30px] border-2 border-black rounded-[20px] m-[3px] text-white cursor-pointer select-none active:translate-y-1 
      ${esOperador(props.children) ? "bg-quaternary hover:bg-[#00471b]" : "bg-quintary hover:bg-gray-700 active:translate-y-1"}`.trimEnd()}
      onClick={() => props.manejarClic(props.children)}
    >
      {props.children}
    </button>
  );
}

export default Boton;
