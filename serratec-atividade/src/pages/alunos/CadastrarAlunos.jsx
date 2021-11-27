import axios from "axios";
import { useEffect, useState } from "react";
import {
  Form,
  InputCadastro,
  ButtonCadastro,
} from "../../components/Cadastros";
import { API_URL } from "../../constants";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useParams } from "react-router";

const CadastrarAlunos = () => {
  const { id } = useParams();
  const valorInicial = id ? "" : null;
  const [nome, setNome] = useState(valorInicial);
  const [idade, setIdade] = useState(valorInicial);
  const [cidade, setCidade] = useState(valorInicial);
  const MySwal = withReactContent(Swal);

  useEffect(() => {
    getAlunos();
  }, []);

  const getAlunos = () => {
    axios.get(API_URL).then((response) => {
      response.data.forEach((aluno) => {
        if (aluno.id === id) {
          setNome(aluno.nome);
          setIdade(aluno.idade);
          setCidade(aluno.cidade);
        }
      });
    });
  };

  const limparCampos = () => {
    setNome("");
    setIdade("");
    setCidade("");
  };

  const cadastrarAlunos = () => {
    if (id) {
      axios
        .put(API_URL, {
          id,
          nome,
          idade,
          cidade,
        })
        .then((response) => {
          if (response.status === 204) {
            MySwal.fire(<p>{response?.data?.message}</p>);
            limparCampos();
          }
        })
        .catch((error) => {
          MySwal.fire({
            icon: "error",
            title: "ops",
            text: error,
          });
        });
    } else {
      axios
        .post(API_URL, {
          nome,
          idade,
          cidade,
        })
        .then((response) => {
          if (response.status === 201) {
            MySwal.fire(<p>{response?.data?.message}</p>);
            limparCampos();
          }
        })
        .catch((error) => {
          MySwal.fire({
            icon: "error",
            title: "ops",
            text: error,
          });
        });
    }
  };

  return (
    <Form>
      <InputCadastro
        label="Nome"
        variant="outlined"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <InputCadastro
        label="Idade"
        variant="outlined"
        value={idade}
        onChange={(e) => setIdade(e.target.value)}
      />
      <InputCadastro
        label="Cidade"
        variant="outlined"
        value={cidade}
        onChange={(e) => setCidade(e.target.value)}
      />
      <ButtonCadastro variant="contained" onClick={cadastrarAlunos}>
        {id ? "Editar" : "Cadastrar"}
      </ButtonCadastro>
    </Form>
  );
};

export default CadastrarAlunos;
