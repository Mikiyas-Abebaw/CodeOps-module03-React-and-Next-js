import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './CartContext';
import Layout from './Layout';
import Home from './Home';
import Menu from './Menu';
import DishDetail from './DishDetail';
import Cart from './Cart';
import Checkout from './Checkout';

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="menu" element={<Menu />} />
            <Route path="menu/:id" element={<DishDetail />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="*" element={<h2 className="not-found-title">404 - Page Not Found</h2>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}