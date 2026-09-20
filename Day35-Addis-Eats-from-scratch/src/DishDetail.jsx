import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getDishes } from './api/menu';

export default function DishDetail() {
  const { id } = useParams();
  const [dish, setDish] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getDishes()
      .then((dishes) => {
        const found = dishes.find((d) => d.id === id);
        if (found) {
          setDish(found);
        } else {
          setError('Dish not found.');
        }
        setIsLoading(false);
      })
      .catch(() => {
        setError('Failed to load dish details.');
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) return <div className="loading-text">Loading dish...</div>;

  if (error || !dish) {
    return (
      <div className="detail-container error-container">
        <h2 className="error-heading"> {error || 'Unknown Dish ID'}</h2>
        <p className="error-message">The dish you are looking for does not exist or has been removed.</p>
        <Link to="/menu" className="back-link">← Back to Menu</Link>
      </div>
    );
  }

  return (
    <div className="detail-container">
      <span className="dish-category">{dish.category}</span>
      <h1 className="detail-title">{dish.name}</h1>
      <p className="detail-desc">{dish.description}</p>
      <div className="detail-price">{dish.price} ETB</div>
      
      <div className="detail-actions">
        <Link to="/menu" className="back-link">← Back to Menu</Link>
      </div>
    </div>
  );
}