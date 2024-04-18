import React from 'react';
import { Link } from 'react-router-dom';

const ViewCart = ({ cart, removeFromCart }) => {
  

    

  return (
    <div >
      <div>
        <div >
          <div >
            <h2 >My Cart</h2>
            <ul >







              
            </ul>
            <div>
              <p>Total Price: ₱{totalPrice.toFixed(2)}</p>
              <p >Total Quantity: {totalQuantity}</p>
            </div>
            {/* Add button to go back to the shop */}
            <div >
              <Link to="/products">
                <button >Back to Shop</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCart;
