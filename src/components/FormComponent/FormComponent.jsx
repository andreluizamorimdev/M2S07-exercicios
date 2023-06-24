import { useContext, useState } from "react";
import { FormContext } from "../../contexts/FormContext/FormContext";
import './FormComponent.css';

const FormComponent = () => {

  const [dadoCadastrado, setDadoCadastrado] = useState({
    nickname: '',
    age: '',
    email: '',
    password: '',
});

  const { setFormData } = useContext(FormContext);

  const handleInput = (event) => {
    event.preventDefault();
    const { value, id } = event.target;

    const data = { ...dadoCadastrado, [id]: value }
    
    setDadoCadastrado(data)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    isFormValid()
      ?  alert('Cadastrado com sucesso')
      :  alert('Os campos devem ser preenchidos');
      setFormData(dadoCadastrado);
  }

  const isFormValid = () => {
    let validate = true;

    const data = Object.entries(dadoCadastrado);
    
    data.forEach(([key]) => {
      if(!dadoCadastrado[key].length) {
        validate = false;
      }
    });
    return validate;
  }

  return(
    <form className="form-box" onSubmit={handleSubmit}>
      <label className="form-label" htmlFor="nickname">Apelido</label>
      <input type="text" id="nickname" className="form-input" placeholder="Digite seu Apelido" onInput={handleInput} />
      
      <label className="form-label" htmlFor="age">Idade</label>
      <input type="number" id="age" className="form-input" placeholder="Digite sua idade" onInput={handleInput} />

      <label className="form-label" htmlFor="email">E-mail</label>
      <input type="email" id="email" className="form-input" placeholder="Digite seu email" onInput={handleInput} />
      
      <label className="form-label" htmlFor="password">Senha</label>
      <input type="password" id="password" className="form-input" placeholder="Digite sua senha" onInput={handleInput} />

      <button type="submit" className="button-form button-color">Cadastrar</button>

    </form>
  )
}

export default FormComponent;