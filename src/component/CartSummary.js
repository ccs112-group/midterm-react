// CartSummary.js
import React from 'react';
import '../App.css'; // Import the CSS file

const CartSummary = ({ cart }) => {
  // Calculate total price and quantity
  const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);
  const totalQuantity = cart.reduce((total, product) => total + product.quantity, 0);

  return (
    <div class="cartSummary">
      <h2 class="headerCart">Cart Summary</h2>
      <table className="table">
        <thead>
          <tr>

            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            
          </tr>

        </thead>
        <tbody>
          {cart.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>₱{product.price.toFixed(2)}</td>
              <td>{product.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Total Price: ₱{totalPrice.toFixed(2)}</p>
      <p>Total Quantity: {totalQuantity}</p>
    </div>
  );
};

export default CartSummary;