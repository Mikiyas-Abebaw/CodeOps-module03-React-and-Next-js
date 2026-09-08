import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function DishDetails() {
  const { id } = useParams();
  const [dish, setDish] = useState(null);

  useEffect(() => {
    fetch("/dishes.json")
      .then((response) => response.json())
      .then((data) => {
        // Robust check for string or number ID types
        const foundDish = data.find((item) => String(item.id) === String(id));
        setDish(foundDish);
      });
  }, [id]);

  if (!dish) {
    return (
      <div className="dish-details">
        <p>Dish not found.</p>
        <Link to="/" className="back-link">← Back to Menu</Link>
      </div>
    );
  }

  return (
    <div className="dish-details">
      <Link to="/" className="back-link">← Back to Menu</Link>
      
      <h2>{dish.name}</h2>
      <span className="category">{dish.category}</span>
      <p style={{ margin: "15px 0" }}>Price: {dish.price} ETB</p>
      
      {dish.spicy && <p style={{ margin: "10px 0" }}> Spicy</p>}
    </div>
  );
}

export default DishDetails;