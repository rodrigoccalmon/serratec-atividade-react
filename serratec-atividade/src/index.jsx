import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import App from "./components/App";
import MyContainer from './components/MyContainer'
import GlobalContext from "./context";
 

//arvore de compoentes abaixo.
ReactDOM.render(
  <React.StrictMode>
    <GlobalContext>
    {/* mycontainer é só uma div que pega o tema para incluir no fundo da página. */}

    <MyContainer>
      <BrowserRouter>

    {/* o componente NAVBAR possui o botão de escolha do tema. */}
    
      <Navbar />
      <App />
    </BrowserRouter>
    </MyContainer>
    </GlobalContext>
  </React.StrictMode>,
  document.getElementById("root")
);

