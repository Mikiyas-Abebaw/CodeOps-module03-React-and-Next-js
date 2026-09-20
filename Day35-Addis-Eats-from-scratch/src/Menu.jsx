import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getDishes } from './api/menu';

export default function Menu() {
  const [dishes, setDishes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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

    return () => {
      isMounted = false;
    };
  }, []);

  if (isLoading) {
    return <div className="loading-text">Loading dishes from Addis... </div>;
  }

  if (error) {
    return <div className="error-text">Error: {error}</div>;
  }

  if (dishes.length === 0) {
    return <div className="empty-text">No dishes available at the moment. Check back soon!</div>;
  }

  return (
    <div className="menu-container">
      <h1 className="menu-title">Addis Ababa Menu</h1>
      <div className="dish-grid">
        {dishes.map((dish) => (
          <div key={dish.id} className="dish-card">
            <div>
              <h3 className="dish-name">{dish.name}</h3>
              <span className="dish-category">{dish.category}</span>
              <p className="dish-desc">{dish.description}</p>
            </div>
            <div className="dish-footer">
              <span className="dish-price">{dish.price} ETB</span>
              <Link to={`/menu/${dish.id}`} className="details-link">View Dish</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}