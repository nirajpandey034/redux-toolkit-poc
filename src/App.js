import './App.css';
import Login from './Components/Login';
import CartContainer from './Components/Cart/CartContainer';
import ProductContainer from './Components/Product/ProductContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="/products" element={<ProductContainer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
