import { useState } from 'react';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';

export default function Checkout() {
  const { cart, cartTotal, clearCart } = useCart();
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address) {
      alert('Please fill in all required delivery details.');
      return;
    }
    
   
    setIsSubmitted(true);
    clearCart();
  };

  if (isSubmitted) {
    return (
      <div className="checkout-container success-container">
        <h2 className="success-heading">Order Placed Successfully!</h2>
        <p className="success-text">
          Thank you for ordering with Addis Eats, <strong>{formData.name}</strong>! Your Ethiopian meal is being prepared and will be delivered to <strong>{formData.address}</strong> shortly.
        </p>
        <Link to="/menu" className="details-link" style={{ display: 'inline-block' }}>
          Back to Menu
        </Link>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="checkout-container" style={{ textAlign: 'center' }}>
        <h2>Your cart is empty</h2>
        <p className="empty-cart-text">Add some delicious dishes to your cart before proceeding to checkout.</p>
        <Link to="/menu" className="details-link" style={{ display: 'inline-block' }}>
          Browse Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h1 className="menu-title" style={{ marginBottom: '1.5rem' }}>Checkout</h1>

      <div className="order-summary-box">
        <h3>Order Summary</h3>
        <p>{cart.reduce((sum, item) => sum + item.quantity, 0)} items | Total: {cartTotal} ETB</p>
      </div>

      <form onSubmit={handleSubmit} className="checkout-form">
        <div className="form-group">
          <label htmlFor="name">Full Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Abebe Bikila"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+251 91 234 5678"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Delivery Address in Addis Ababa *</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Bole Road, near Friendship Building"
            required
          />
        </div>

     

        <button type="submit" className="submit-order-btn">
          Place Order ({cartTotal} ETB)
        </button>
      </form>
    </div>
  );
}