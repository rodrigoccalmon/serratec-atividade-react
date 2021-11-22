import styled from "styled-components";
import { Button, TextField } from "@mui/material";


const Form = styled.form`
    display: flex;
    margin-top: 25px;
    flex-direction: column;
`

const InputCadastro = styled(TextField) `
    width: 500px;
    margin: 15px auto;
        
`

const ButtonCadastro = styled(Button)` 
    width: 500px;
    margin: auto;
`

export { Form, InputCadastro, ButtonCadastro }