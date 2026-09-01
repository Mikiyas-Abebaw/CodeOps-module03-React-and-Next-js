const restaurantName = "Addis Café";

function Header() {
  return (
    <header className="header">
      <h1> {restaurantName}</h1>
      <p>Fresh Ethiopian Food & Coffee</p>
    </header>
  );
}

export default Header;