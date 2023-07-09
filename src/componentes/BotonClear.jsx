import React from "react";
import '../hojas-de-estilo/shadow.css'

const BotonClear = (props) => (
  <div className="shadowcss h-[80px] font-[1.6rem] flex flex-1 bg-[#ebb000]  mt-[8px] justify-center items-center font-bold text-white border-2 border-white cursor-pointer rounded-[45px] select-none hover:bg-[#ebb000]" onClick={props.manejarClear}>
    {props.children}
  </div>
);

export default BotonClear;
