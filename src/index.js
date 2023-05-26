

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

//pages
import { Home } from './pages/Home';
import { Sobremim } from './pages/Sobremim';
import { Ilustracoes } from './pages/Ilustracoes';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import Cadastro from './pages/Cadastro';
import LoginPage from './pages/LoginPage';

//Contexts
import { AuthProvider } from './context/authContext';
import { DrawProvider } from './context/AllDrawtContext';
import GlobalStyles from './components/styles/GlobalStyles';
import { AlertProvider } from './context/AlertContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <React.StrictMode>
      <BrowserRouter>
        <GlobalStyles/>
          <AuthProvider>
            <AlertProvider>
              <Header/>
      
                <Routes>
                  <Route path = "/" element = {<Home />} />
                  <Route path = "/Ilustracoes" element = {<DrawProvider><Ilustracoes/></DrawProvider>}/>
                  <Route path = "/Sobremim" element = {<Sobremim />} />
                  <Route path = "/Login" element = {<LoginPage />} />
                  <Route path = "/Cadastro" element = { <Cadastro/> } />
                </Routes>

              <Footer/>
            </AlertProvider>
        </AuthProvider>
      </BrowserRouter>
    </React.StrictMode>
);

