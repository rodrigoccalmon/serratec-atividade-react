import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { StyledTableCell, StyledTableRow } from "./styles";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../constants";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import Lottie from "react-lottie";
import animationData from "../../lotties/9131-loading-green.json";

const AlunosListagem = () => {
  const navigate = useNavigate();
  const [alunos, setAlunos] = useState([]);
  const MySwal = withReactContent(Swal);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    getAlunos();
  }, []);

  const getAlunos = () => {
    axios.get(API_URL).then((response) => {
      setTimeout(() => {
        setAlunos(response.data);
      }, 3000);
    });
  };

  const deletarAluno = (aluno) => {
    axios
      .delete(API_URL, { data: aluno })
      .then((response) => {
        MySwal.fire(<p>{response?.data?.message}</p>);
        const alunoIndex = alunos.findIndex(
          (elemento) => elemento.id === aluno.id
        );
        let newAlunos = [...alunos];
        newAlunos.splice(alunoIndex, 1);
        setAlunos(newAlunos);
      })
      .catch((error) => {
        MySwal.fire({
          icon: "error",
          title: "Opsss",
          text: error,
        });

        const alunoIndex = alunos.findIndex(
          (elemento) => elemento.id === aluno.id
        );
        let newAlunos = [...alunos];
        newAlunos.splice(alunoIndex, 1);
        setAlunos(newAlunos);
      });
  };

  const editarAluno = (aluno) => {
    navigate(`/editar-alunos/${aluno.id}`);
  };

  return (
  <Box sx={{ marginTop: '25px'}}>
      {alunos.length > 0 ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700,  }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell >Nome</StyledTableCell>
                <StyledTableCell>Idade</StyledTableCell>
                <StyledTableCell>Cidade</StyledTableCell>
                <StyledTableCell sx={{alignSelf: 'right'}}>Ações</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {alunos.map((aluno) => (
                <StyledTableRow>
                  <StyledTableCell>{aluno.nome}</StyledTableCell>
                  <StyledTableCell>{aluno.idade}</StyledTableCell>
                  <StyledTableCell>{aluno.cidade}</StyledTableCell>
                  <StyledTableCell align="right">
                    <Button sx={{color:'red'}} onClick={() => deletarAluno(aluno)} variant="text">
                      <DeleteIcon />
                    </Button>
                    <Button sx={{color:'red'}}  onClick={() => editarAluno(aluno)} variant="text">
                      <EditIcon />
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <>
          <Lottie options={defaultOptions} height={400} width={400} />
        </>
      )}
    </Box>
  );
};

export default AlunosListagem;
