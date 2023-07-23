import React from "react";
import '../style/shadow.css'

const BotonClear = (props) => (
  <div className="shadowcss h-[60px] font-[1.6rem] flex flex-1 bg-[#ebb000]  mt-[8px] justify-center items-center font-bold text-white border-2 border-black cursor-pointer rounded-[20px] active:translate-y-1 select-none hover:bg-[#957000]" onClick={props.manejarClear}>
    {props.children}
  </div>
);

export default BotonClear;
