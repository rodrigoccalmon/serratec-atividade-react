import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, useRoutes } from "react-router-dom";
import AlunosListagem from './pages/alunos/AlunosListagem';
import Navbar from './components/NavBar';
import { Container } from '@mui/material'
import CadastrarAlunos from './pages/alunos/CadastrarAlunos';

const Routes = () => {
  const  routes = useRoutes([
    { path: "/", element: <AlunosListagem /> },
    { path: "/cadastrar-alunos", element: <CadastrarAlunos /> }
  ]);
  return routes
}
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Container maxWidth="lg">
      <Routes />
      </Container>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
