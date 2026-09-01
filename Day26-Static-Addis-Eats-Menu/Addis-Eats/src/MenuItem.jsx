function MenuItem({ name, price, description, category }) {
  const priceWithTax = price * 1.15;

  return (
    <div className="menu-card">
      <span className="category">{category}</span>

      <h3>{name}</h3>

      <p className="description">{description}</p>

      <p className="price">{price} ETB</p>

      <p className="tax-price">
        With tax: {priceWithTax.toFixed(2)} ETB
      </p>
    </div>
  );
}

export default MenuItem;