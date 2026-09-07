import { useState } from "react";

function Dish({ name, price, category, spicy, onAdd }) {
  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount(count + 1);
    onAdd(price);
  }

  return (
    <div className="menu-card">
      <span className="category">{category}</span>

      <h3>{name}</h3>

      <p>{price} ETB</p>

      {spicy && <p>Spicy</p>}

      <button onClick={handleAdd}>Add</button>

      <p>Added: {count}</p>
    </div>
  );
}

export default Dish;