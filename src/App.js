import { HashRouter, Routes, Route } from 'react-router-dom';
import CategoryPage from './pages/category';
import HomePage from './pages/home';
import Header from './reusables/header';
import { Application } from './reusables/styled-components/logo';
import './App.css';
import CartPage from './pages/cart';
import CategoryList from './pages/category/list';

function App() {
  return (
    <Application>
      <HashRouter> 
        <Header />

        <h1>{process.env.REACT_APP_ENVIRONMENT}</h1>
        <h1>{process.env.REACT_APP_API_ENDPOINT}</h1>

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/categories' element={<CategoryList />} />
          <Route path='/category/:name' element={<CategoryPage />} />
          <Route path='/cart' element={<CartPage />} />
        </Routes>
      </HashRouter>
    </Application>
  );
}

export default App;
