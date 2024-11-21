import React, { useState } from 'react';
import FormularioDeRegistroMensagem from '../components/FormularioDeRegistroMensagem';
import '../styles/App.css';

const SignupForm = () => {
  // Inicializa o estado dos campos do formulário e da mensagem de erro
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    // Verifica se todos os campos estão preenchidos
    if (name && email && password) {
      setSubmitted(true);
      setError('');
    } else {
      setError('Por favor, preencha todos os campos.');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Nome:
              <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Digite seu nome" 
              />
            </label>
          </div>
          <div>
            <label>
              E-mail:
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Digite seu e-mail" 
              />
            </label>
          </div>
          <div>
            <label>
              Senha:
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Digite sua senha" 
              />
            </label>
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type="submit">Enviar</button>
        </form>
      ) : (
        <FormularioDeRegistroMensagem name={name} />
      )}
    </div>
  );
};

export default SignupForm;

