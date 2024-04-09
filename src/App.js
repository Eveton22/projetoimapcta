import Cadastro from '../src/pages/cadastro/index'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sistema from './pages/Sistema';
import Estoque from './pages/estoque';
import Home from './pages/Home';
import SearchProducts from './pages/searchproducts';

function App() {
  return (

    <BrowserRouter>
    <Routes>
    <Route path='/cadastro' element={<Cadastro />}></Route>
    <Route path='/sistema' element={<Sistema />}></Route>
    <Route path='/buscar' element={<SearchProducts />}></Route>
    <Route path='/' element={<Home />}></Route>
    </Routes>
    </BrowserRouter>

  );
}

export default App;
