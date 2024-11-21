import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '../src/styles/App.css'
import ContadorSimples from './components/ContadorSimples';
import TrocaCorDeFundo from './components/TrocaCorDeFundo';
import ToDoList from './components/ToDoList';
import Temporizador from './components/Temporizador';
import FiltroDeLista from './components/FiltroDeLista';
import FormularioDeRegistro from './components/FormularioDeRegistro';
import FormularioDeRegistroMensagem from './components/FormularioDeRegistroMensagem';
import RequisicaoDeDadosSimples from './components/RequisicaoDeDadosSimples';
import GaleriaDeImagens from './components/GaleriaDeImagens';
import Timer from './components/Timer';
import ComponentesNavegaveis from './components/ComponentesNavegaveis';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Atividade 7</h1>
        <nav className="navbar">
          <ul>
            <li><Link to="/contador">Contador Simples</Link></li>
            <li><Link to="/alteracao-cor-fundo">Alteração de Cor de Fundo</Link></li>
            <li><Link to="/lista-tarefas">Lista de Tarefas</Link></li>
            <li><Link to="/temporizador">Temporizador</Link></li>
            <li><Link to="/filtro-lista">Filtro de Lista</Link></li>
            <li><Link to="/formulario-registro">Formulário de Registro</Link></li>
            <li><Link to="/requisicao-dados">Requisição de Dados</Link></li>
            <li><Link to="/galeria-imagens">Galeria de Imagens</Link></li>
            <li><Link to="/timer-com-alerta">Timer com Alerta</Link></li>
            <li><Link to="/tabs-navegaveis">Tabs Navegáveis</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/contador" element={<ContadorSimples />} />
          <Route path="/alteracao-cor-fundo" element={<TrocaCorDeFundo />} />
          <Route path="/lista-tarefas" element={<ToDoList />} />
          <Route path="/temporizador" element={<Temporizador />} />
          <Route path="/filtro-lista" element={<FiltroDeLista />} />
          <Route path="/formulario-registro" element={<FormularioDeRegistro />}/>
          <Route path="/formulario-mensagem" element={<FormularioDeRegistroMensagem />}/>           
          <Route path="/requisicao-dados" element={<RequisicaoDeDadosSimples />} />
          <Route path="/galeria-imagens" element={<GaleriaDeImagens />} />
          <Route path="/timer-com-alerta" element={<Timer />} />
          <Route path="/tabs-navegaveis" element={<ComponentesNavegaveis />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;