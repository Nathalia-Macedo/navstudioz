import { Home } from '../pages/Home';
import './App.css';
import Portfolio from '../pages/Portfolio';
import Pacotes from '../pages/Pacotes';
import Pagina_Adm from '../pages/ADM';
import Pagina_Cadastro from '../pages/Cadastro';
import Pagina_User from '../pages/User';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
 
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio/>}/>
      <Route path="/pacotes" element={<Pacotes/>}/>
      <Route path="/login" element={<Pagina_User/>}/>
      <Route path="cadastro" element={<Pagina_Cadastro/>}/>
      <Route path="/usuario" element={<Pagina_User/>}/>
      <Route path="/adm" element={<Pagina_Adm/>}/>
    </Routes>
  </BrowserRouter>
    );
}

export default App;
