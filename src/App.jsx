import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Navigate from './components/navigate';
import Usuario from './pages/usuario';
import Categoria from './pages/categoria';
import Gasto from './pages/gasto';
import Ingreso from './pages/ingreso';
import Login from './pages/login ';
import Register from './pages/register';
import { useState } from 'react';
import Error from './pages/error';

function Layout() {
  const location = useLocation();
  const hideNavigateRoutes = ['/login','/','/register','/home'];
  
  return (
    <>
      {!hideNavigateRoutes.includes(location.pathname) && <Navigate />}
    </>
  );
}


function App() {

  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/home' element={<Home />} />
        <Route path='/usuario' element={<Usuario />} />
        <Route path='/categoria' element={<Categoria />} />
        <Route path='/gasto' element= {<Gasto/>} />
        <Route path='/ingreso' element={<Ingreso />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

