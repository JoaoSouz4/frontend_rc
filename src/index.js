import './styles.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Home } from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Musicas } from './pages/Musicas';
import { Sobremim } from './pages/Sobremim';
import { Ilustracoes } from './pages/Ilustracoes';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/Ilustracoes" element = {<Ilustracoes />} />
        <Route path = "/Musicas" element = {<Musicas />} />
        <Route path = "/Sobremim" element = {<Sobremim />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
