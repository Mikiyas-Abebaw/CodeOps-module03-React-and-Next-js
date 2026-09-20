import { Outlet, Link } from 'react-router-dom';
import { useCart } from './CartContext';

export default function Layout() {
  const { cartCount } = useCart();

  return (
    <div className="app-container">
      <header className="header">
        <nav className="nav-container">
          <Link to="/" className="logo">Addis Eats 🇪🇹</Link>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/cart">Cart ({cartCount})</Link>
            <Link to="/checkout">Checkout</Link>
          </div>
        </nav>
      </header>

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="footer">
        &copy; {new Date().getFullYear()} Addis Eats. All rights reserved.
      </footer>
    </div>
  );
}