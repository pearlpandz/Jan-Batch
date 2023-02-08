import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';
import CategoryPage from './pages/category';
import HomePage from './pages/home';
import Header from './reusables/header';
import { Application } from './reusables/styled-components/logo';
import './App.css';
import CartPage from './pages/cart';

function App() {
  return (
    <Application>
      <HashRouter> 
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/category/:name' element={<CategoryPage />} />
          <Route path='/cart' element={<CartPage />} />
        </Routes>
      </HashRouter>
    </Application>
  );
}

export default App;
