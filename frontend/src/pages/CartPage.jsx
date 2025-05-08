import React from 'react';
import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { cart } = useCart(); // Assuming cart is provided by context
  const cartItems = cart?.items || []; // Safe fallback to empty array if cart or items is undefined

  if (cartItems.length === 0) {
    return (
      <div>
        <h1>Your cart is empty.</h1>
        <p>It looks like you haven't added anything to your cart yet.</p>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      <ul className="cart-items">
        {cartItems.map((item) => (
          <li key={item.id} className="cart-item">
            <img src={item.imageURL} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <span className="cart-item-name">{item.name}</span>
              <span className="cart-item-price">{`$${item.price.toFixed(2)}`}</span>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-summary">
        <h2>Cart Summary</h2>
        <p>Total items: {cartItems.length}</p>
        <p>
          Total Price: $
          {cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}
        </p>
        <button onClick={() => alert('Proceeding to checkout')}>Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;
