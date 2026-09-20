import { useCart } from './CartContext';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="cart-container empty-cart-container">
        <h2>Your cart is empty</h2>
        <p className="empty-cart-text">Explore our menu and add some delicious Ethiopian dishes!</p>
        <Link to="/menu" className="details-link" style={{ display: 'inline-block' }}>Browse Menu</Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1 className="menu-title">Your Cart</h1>
      <div className="cart-list">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="cart-item-info">
              <h4>{item.name}</h4>
              <p>{item.price} ETB each</p>
            </div>
            <div className="cart-controls">
              <button 
                onClick={() => updateQuantity(item.id, item.quantity - 1)} 
                className="qty-btn"
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button 
                onClick={() => updateQuantity(item.id, item.quantity + 1)} 
                className="qty-btn"
              >
                +
              </button>
              <span className="cart-item-total">
                {item.price * item.quantity} ETB
              </span>
              <button 
                onClick={() => removeFromCart(item.id)} 
                className="remove-btn"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <span>Total: {cartTotal} ETB</span>
        <Link to="/checkout" className="checkout-link">Proceed to Checkout</Link>
      </div>
    </div>
  );
}