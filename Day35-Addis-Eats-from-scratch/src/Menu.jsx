import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getDishes } from './api/menu';
import { useCart } from './CartContext';

const CATEGORIES = ['All', 'Wats', 'Vegetarian', 'Tibs', 'Special', 'Breakfast', 'Fish'];

export default function Menu() {
  const [dishes, setDishes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get('category') || 'All';

  const { addToCart } = useCart();

  useEffect(() => {
    let isMounted = true;
    getDishes()
      .then((data) => {
        if (isMounted) {
          setDishes(data);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err.message || 'Failed to load menu');
          setIsLoading(false);
        }
      });
    return () => { isMounted = false; };
  }, []);

  const handleCategorySelect = (category) => {
    if (category === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  const filteredDishes = selectedCategory === 'All' 
    ? dishes 
    : dishes.filter(d => d.category === selectedCategory);

  if (isLoading) return <div className="loading-text">Loading delicious dishes... 🇪🇹</div>;
  if (error) return <div className="error-text">⚠️ Error: {error}</div>;

  return (
    <div className="menu-container">
      <h1 className="menu-title">Addis Ababa Menu</h1>

      <div className="category-bar">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategorySelect(cat)}
            className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {filteredDishes.length === 0 ? (
        <div className="empty-text">No dishes found in this category.</div>
      ) : (
        <div className="dish-grid">
          {filteredDishes.map((dish) => (
            <div key={dish.id} className="dish-card">
              <div>
                <h3 className="dish-name">{dish.name}</h3>
                <span className="dish-category">{dish.category}</span>
                <p className="dish-desc">{dish.description}</p>
              </div>
              <div className="dish-footer">
                <span className="dish-price">{dish.price} ETB</span>
                <div className="card-actions">
                  <button onClick={() => addToCart(dish)} className="add-to-cart-btn">Add</button>
                  <Link to={`/menu/${dish.id}`} className="details-link">View</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}