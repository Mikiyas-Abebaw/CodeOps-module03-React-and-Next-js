import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Menu from "./Menu";
import OrderForm from "./OrderForm";
import DishDetails from "./DishDetails";
import RequireAuth from "./RequireAuth";
import SignIn from "./SignIn";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Menu />} />

        <Route path="menu/:id" element={<DishDetails />} />

        <Route path="signin" element={<SignIn />} />

        <Route element={<RequireAuth />}>
          <Route path="checkout" element={<OrderForm />} />
        </Route>

        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Route>
    </Routes>
  );
}

export default App;