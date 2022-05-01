import React, { useContext }from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import CadastroPlanta from '../pages/Plantas/Cadastrar/index';
import CadastroRaspberry from '../pages/Configuracao/Cadastrar/index';
import Home from '../pages/Root/index';
import Login from '../pages/Login/index';
import CadastrarUsuario from '../pages/Cadastro/index';
import RecuperarConta from '../pages/RecuperaLogin/index';
import Sobre from '../pages/About/index';
import Sistema from '../pages/Sistema/index';
import Configuracao from '../pages/Configuracao/index';
import Monitoramento from '../pages/Monitoramento/index';
import Plantas from '../pages/Plantas/index';
import Alert from '../components/Alert/index';
import { Context } from '../contexts/auth'
import { useNavigate } from 'react-router-dom';

export const paths = require('./paths');

function CustomRoute({ isPrivate, ...rest }) {
  const { authenticated } = useContext(Context);
  const navigate = useNavigate();

  if (isPrivate && !authenticated) {
    navigate(Login);
  }
  return <Route {...rest} />;
}

export default function Rotas() {
  return (
    <BrowserRouter>
      <Alert/>
      <Routes>
        <Route exact path={paths.loginSistema} element={<Login/>} />
        <Route exact path={paths.cadastrarNoSistema} element={<CadastrarUsuario/>} />
        <Route exact path={paths.recuperarConta} element={<RecuperarConta/>} />
        <Route exact path={paths.cadastrarPlantas} element={<CadastroPlanta/>} />
        <Route exact path={paths.cadastrarRaspberry} element={<CadastroRaspberry/>} />
        <Route exact path={paths.home} element={<Home/>} />
        <Route exact path={paths.loginSistema} element={<Login/>} />
        <Route exact path={paths.about} element={<Sobre/>} />
        <Route exact path={paths.monitoramento} element={<Monitoramento/>} />
        <Route exact path={paths.sistema} element={<Sistema/>} />
        <Route exact path={paths.configuracao} element={<Configuracao/>} />
        <Route exact path={paths.plantas} element={<Plantas/>} />
      </Routes>
    </BrowserRouter>
  );
}