import { Link, Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    <>
      <Header />

      <nav>
        <Link to="/">Home</Link>
        {" | "}
        <Link to="/checkout">Checkout</Link>
      </nav>

      <Outlet />

      {/* Add your footer here so it displays on every page */}
      <footer>
        <p>&copy; 2026 Addis Eats. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Layout;