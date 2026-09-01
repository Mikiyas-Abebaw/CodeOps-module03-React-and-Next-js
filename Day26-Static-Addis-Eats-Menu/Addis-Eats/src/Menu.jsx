import MenuItem from "./MenuItem";

const menu = [
  {
    id: 1,
    name: "Buna",
    price: 80,
    description: "Traditional Ethiopian coffee",
    category: "Drink",
  },
  {
    id: 2,
    name: "Shiro",
    price: 150,
    description: "Traditional Ethiopian chickpea stew",
    category: "Main",
  },
  {
    id: 3,
    name: "Tibs",
    price: 250,
    description: "beef with onions, peppers, and spices",
    category: "Main",
  },
  {
    id: 4,
    name: "Doro Wot",
    price: 300,
    description: "Spicy Ethiopian chicken stew served with injera",
    category: "Main",
  },
  {
    id: 5,
    name: "Firfir",
    price: 130,
    description: "Pieces of injera mixed with berbere and seasoned sauce",
    category: "Breakfast",
  },
  {
    id: 6,
    name: "Macchiato",
    price: 100,
    description: "Ethiopian-style espresso with steamed milk",
    category: "Drink",
  },
];

function Menu() {
  return (
    <section className="menu">
      <h2>Our Menu</h2>

      <div className="menu-grid">
        {menu.map((item) => (
          <MenuItem
            key={item.id}
            name={item.name}
            price={item.price}
            description={item.description}
            category={item.category}
          />
        ))}
      </div>
    </section>
  );
}

export default Menu;