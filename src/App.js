import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import NotFound from './views/NotFound';
import Menu from './views/Menu';
import Mensajes from './views/Mensajes'
import Contacto from './views/Contacto';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Layout'


function App() {
  return (
    <Layout>
          <Routes>
            <Route path='/' element={<Home /> } />
            <Route path='*' element={<NotFound />}/>
            <Route path='/menu' element={<Menu />}/>
            <Route path='/mensajes' element={<Mensajes />}/>
            <Route path='/contacto' element={<Contacto />}/>
          </Routes>
    </Layout>
  );
}

export default App;

