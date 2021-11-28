import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Switch from "@mui/material/Switch";
import { ThemeWrapper } from "./styles";
import { useContext } from "react";
import TemaContext from "../../context/tema";

export default function Navbar(props) {
  const { temaSelecionado, setTemaSelecionado } = useContext(TemaContext);
  const alterarTema = (e) => {
    const novoTema = e.target.checked ? "escuro" : "claro";
    setTemaSelecionado(novoTema);
  };

  return (
  
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{backgroundColor: '#222', color: 'chartreuse'}} position="static">
        <Toolbar>
          <Link to="/">
            <Button   color="inherit">Lista de alunos</Button>
          </Link>
          <Link to="/cadastrar-alunos">
            <Button color="inherit">Cadastro de alunos</Button>
          </Link>
          <Link to="/cadastrar-materias">
            <Button color="inherit"> Cadastro de matérias</Button>
          </Link>
          <Link to="/lista-de-materias">
            <Button color="inherit"> Lista de matérias</Button>
          </Link>
          <ThemeWrapper>
            <span style={{ alignSelf: "center" }}>Alterar Tema</span>
            <Switch
              onClick={(e) => {
                alterarTema(e);
              }}
            />
          </ThemeWrapper>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
