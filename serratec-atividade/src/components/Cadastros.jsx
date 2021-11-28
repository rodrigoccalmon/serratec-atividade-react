import styled from "styled-components";
import { Button, TextField } from "@mui/material";


const Form = styled.form`
  display: flex;
  margin-top: 25px;
  flex-direction: column;

`;

const InputCadastro = styled(TextField)`
  width: 500px;
  margin: 15px auto;
  border-radius: 50px;
  border-color: chartreuse;

`;

const ButtonCadastro = styled(Button)`
  width: 500px;
  margin: auto;
  background-color: #222;
  border-radius: 10px;
  border-color: chartreuse;
  font-weight: 550;
  
`;


export { Form, InputCadastro, ButtonCadastro };
