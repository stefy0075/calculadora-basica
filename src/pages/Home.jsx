import React, { useState } from 'react';

class Calculadora {
  sumar = (num1, num2) => {
    return num1 + num2;
  };

  restar = (num1, num2) => {
    return num1 - num2;
  };

  dividir = (num1, num2) => {
    return num1 / num2;
  };

  multiplicar = (num1, num2) => {
    return num1 * num2;
  };
}

const Home = () => {
  const [valorActual, setValorActual] = useState("");
  const [valorAnterior, setValorAnterior] = useState("");
  const calculadora = new Calculadora();
  const signos = {
    sumar: "+",
    restar: "-",
    dividir: "%",
    multiplicar: "*",
  };
  let tipoOperacion = undefined;

  const borrar = () => {
    setValorActual(valorActual.slice(0, -1));
  };

  const borrarTodo = () => {
    setValorActual("");
    setValorAnterior("");
    tipoOperacion = undefined;
  };

  const computar = (tipo) => {
    if (tipoOperacion !== "igual") {
      calcular();
    }
    tipoOperacion = tipo;
    setValorAnterior(`${valorActual} ${signos[tipoOperacion] || ""}`);
    setValorActual("");
  };

  const agregarNumero = (numero) => {
    if (numero === "." && valorActual.includes(".")) return;
    setValorActual(valorActual.toString() + numero.toString());
  };

  const calcular = () => {
    const valorAnteriorNum = parseFloat(valorAnterior);
    const valorActualNum = parseFloat(valorActual);

    if (isNaN(valorActualNum) || isNaN(valorAnteriorNum)) return;

    const resultado = calculadora[tipoOperacion](valorAnteriorNum, valorActualNum);
    setValorActual(resultado.toString());
  };

  const botonesNumeros = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, "."];
  const botonesOperadores = ["/", "*", "-", "+"];

  return (
    <div className="bg-red w-[50%] h-[100%]">
      <div className="calculadora">
        <div className="display">
          <div id="valor-anterior">{valorAnterior}</div>
          <div id="valor-actual">{valorActual}</div>
        </div>

        <button className="column-2" onClick={borrarTodo} id="boton-c">
          C
        </button>
        <button onClick={borrar}>&larr;</button>
        <button className="operador" id="naranja" onClick={() => computar("dividir")}>
          %
        </button>
        {botonesNumeros.map((numero) => (
          <button className="numero" key={numero} onClick={() => agregarNumero(numero)}>
            {numero}
          </button>
        ))}
        {botonesOperadores.map((operador) => (
          <button
            className="operador"
            id="naranja"
            key={operador}
            onClick={() => computar(operador)}
          >
            {operador}
          </button>
        ))}
        <button className="operador" id="naranja" onClick={calcular}>
          =
        </button>
      </div>
    </div>
  );
};

export default Home;
