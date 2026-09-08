import { useState } from "react";
import { Link } from "react-router-dom";

function Dish({ id, name, price, category, spicy, onAdd }) {
  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount(count + 1);
    onAdd(price);
  }

  return (
    <div className="menu-card">
      <Link to={`/menu/${id}`}>
        <h3>{name}</h3>
      </Link>

      <span className="category">{category}</span>

      <p>{price} ETB</p>

      {spicy && <p> Spicy</p>}

      <button onClick={handleAdd}>Add</button>

      <p>Added: {count}</p>
    </div>
  );
}

export default Dish;