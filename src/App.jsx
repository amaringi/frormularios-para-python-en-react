import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Error from './pages/error';
import Navigate from './components/navigate';
import Usuario from './pages/usuario';
import Categoria from './pages/categoria';
import Gasto from './pages/gasto';
import Ingreso from './pages/ingreso';

function Layout() {
  const location = useLocation();
  return (
    <>
      {location.pathname !== '/' && <Navigate />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/usuario' element={<Usuario />} />
        <Route path='/categoria' element={<Categoria />} />
        <Route path='/gasto' element={<Gasto />} />
        <Route path='/ingreso' element={<Ingreso />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

