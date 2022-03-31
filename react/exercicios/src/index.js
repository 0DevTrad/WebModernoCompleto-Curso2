import React from "react";
import ReactDOM from "react-dom";

import Primeiro from "./componentes/Primeiro";
import BomDia from "./componentes/BomDia";

// Como em Multiplos.jsx eu exportei o BoaTarde com default, eu posso colocar fora das chaves.
import BoaTarde, { BoaNoite } from "./componentes/Multiplos";

import Saudacao from "./componentes/Saudacao";

import Pai from "./componentes/Pai";

const elemento = <h1> React 2</h1>;
ReactDOM.render(<Primeiro />, document.getElementById("root"));
ReactDOM.render(<BomDia nome=" Nala" />, document.getElementById("root"));
// Todo componente personalizado criado por você deve iniciar com letra maiúscula

ReactDOM.render(
  <div>
    <BoaTarde nome="Mayara" />
    <BoaNoite nome="Nala" />
  </div>,
  document.getElementById("root")
);

ReactDOM.render(
  <div>
    <Saudacao tipo="Bom dia" nome="Mayara" />
  </div>,
  document.getElementById("root")
);

ReactDOM.render(
  <div>
    <Pai nome="Paulo" sobrenome="Silva" />
  </div>,
  document.getElementById("root")
);
