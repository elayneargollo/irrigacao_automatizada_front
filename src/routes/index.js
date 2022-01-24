import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Header from "../components/HeaderSider/index";
import Navbar from '../components/NavBar/navbar';
import Footer from '../components/Footer/footer';

import CadastroPlanta from '../pages/Plantas/Cadastrar/index';
import Home from '../pages/Root/index';
import Sobre from '../pages/About/index';
import Sistema from '../pages/Sistema/index';
import Configuracao from '../pages/Configuracao/index';
import Monitoramento from '../pages/Monitoramento/index';

export const paths = require('./paths');

export default function Rotas() {
  return (
    <BrowserRouter>
     <Navbar />
      <Header />
      <Routes>
        <Route exact path={paths.cadastrarPlantas} element={<CadastroPlanta/>} />
        <Route exact path={paths.home} element={<Home/>} />
        <Route exact path={paths.about} element={<Sobre/>} />
        <Route exact path={paths.monitoramento} element={<Monitoramento/>} />
        <Route exact path={paths.sistema} element={<Sistema/>} />
        <Route exact path={paths.configuracao} element={<Configuracao/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}