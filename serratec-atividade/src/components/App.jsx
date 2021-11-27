import { Container } from "@mui/material";
import CadastrarAlunos from "../pages/alunos/CadastrarAlunos";
import CadastrarMaterias from "../pages/materias/CadastrarMaterias";
import MateriasListagem from "../pages/materias/MateriasListagem";
import AlunosListagem from "../pages/alunos/AlunosListagem";
import { useRoutes } from "react-router-dom";
import { useState } from "react";

const Routes = () => {
  const routes = useRoutes([
    { path: "/", element: <AlunosListagem /> },
    { path: "/cadastrar-alunos", element: <CadastrarAlunos /> },
    { path: "/cadastrar-materias", element: <CadastrarMaterias /> },
    { path: "/lista-de-materias", element: <MateriasListagem /> },
    { path: "/editar-alunos/:id", element: <CadastrarAlunos /> },
  ]);
  return routes;
};

const App = () => {
    const [temaEscuro, setTemaEscuro] = useState(false);
    const estiloContainer = {
        backgroundColor: temaEscuro ? '#000' : '#fff'
    }
  return (
    <Container maxWidth="lg" sx={estiloContainer}>
      <Routes />
    </Container>
  );
};
export default App;
