import { useState } from "react";
import { menu } from "./data";
import CategoryBar from "./CategoryBar";
import Dish from "./Dish";
import OrderForm from "./OrderForm";

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [total, setTotal] = useState(0);

  const categories = ["All", "Main", "Breakfast", "Drink"];

  const filteredMenu =
    selectedCategory === "All"
      ? menu
      : menu.filter((item) => item.category === selectedCategory);

  function addToOrder(price) {
    setTotal(total + price);
  }

  console.log("Selected category:", selectedCategory);
  console.log("Order total:", total);

  return (
    <section className="menu">
      <h2>Our Menu</h2>

      <CategoryBar
        categories={categories}
        selectedCategory={selectedCategory}
        onSelect={setSelectedCategory}
      />

      <div className="menu-grid">
        {filteredMenu.map((item) => (
          <Dish
            key={item.id}
            name={item.name}
            price={item.price}
            category={item.category}
            spicy={item.spicy}
            onAdd={addToOrder}
          />
        ))}
      </div>

      <h2>Order Total: {total} ETB</h2>

      <OrderForm />
    </section>
  );
}

export default Menu;