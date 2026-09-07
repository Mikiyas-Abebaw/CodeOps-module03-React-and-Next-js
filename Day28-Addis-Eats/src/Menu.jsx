import { useEffect, useRef, useState } from "react";
import { loadDishes } from "./api";
import DishList from "./DishList";

function Menu() {
  const [category, setCategory] = useState("All");
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [totall, setTotall] = useState(0);

  const searchInput = useRef(null);

  const categories = ["All", "Main", "Breakfast", "Drink"];

  useEffect(() => {
    const controller = new AbortController();

    async function fetchDishes() {
      try {
        setLoading(true);
        setError("");

        const data = await loadDishes(category, controller.signal);
        setDishes(data);
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchDishes();

    return () => {
      controller.abort();
    };
  }, [category]);

 useEffect(() => {
  if (!loading && searchInput.current) {
    searchInput.current.focus();
  }
}, [loading]);

  const [total, setTotal] = useState(0);

function addToOrder(price) {
  setTotal((previousTotal) => previousTotal + price);
}

  if (loading) {
    return <p>Loading dishes...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <section className="menu">
      <h2>Our Menu</h2>

      <input
        ref={searchInput}
        type="text"
        placeholder="Search dishes..."
      />

      <div className="category-bar">
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={category === item ? "selected" : ""}
          >
            {item}
          </button>
        ))}
      </div>

      <DishList dishes={dishes} onAdd={addToOrder} />
      <h3>Order Total: {total} ETB</h3>
    </section>
  );
}

export default Menu;