import { useContext } from "react";
import TemaContext from "../context/tema";
import tema from "../tema";

//my container é o fundo da nossa aplicação. é uma div que está em volta de toda nossa aplicação.

const MyContainer = (props) => {
  const { temaSelecionado, setTemaSelecionado } = useContext(TemaContext);

  return <div style={tema[temaSelecionado]}>{props.children}</div>;
};

export default MyContainer;
