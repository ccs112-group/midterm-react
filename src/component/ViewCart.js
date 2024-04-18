import React from 'react';
import { Link } from 'react-router-dom';

const ViewCart = ({ cart, removeFromCart }) => {
  

    

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <h2 className="card-header">My Cart</h2>
            <ul >







              
            </ul>
            <div className="card-footer">
              <p className="card-text">Total Price: ₱{totalPrice.toFixed(2)}</p>
              <p className="card-text">Total Quantity: {totalQuantity}</p>
            </div>
            {/* Add button to go back to the shop */}
            <div className="card-footer">
              <Link to="/products">
                <button className="btn btn-primary">Back to Shop</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCart;
