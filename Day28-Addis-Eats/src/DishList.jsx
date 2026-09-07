import Dish from "./Dish";

function DishList({ dishes, onAdd }) {
  if (dishes.length === 0) {
    return <p>No dishes found.</p>;
  }

  return (
    <div className="menu-grid">
      {dishes.map((dish) => (
        <Dish
          key={dish.id}
          name={dish.name}
          price={dish.price}
          category={dish.category}
          spicy={dish.spicy}
          onAdd={onAdd}
        />
      ))}
    </div>
  );
}

export default DishList;