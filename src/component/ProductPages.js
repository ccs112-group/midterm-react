// ProductPages.js
import React from 'react';
import Product from './Product';
import {useNavigate } from 'react-router-dom'; // Import Link from react-router-dom
import '../App.css'; // Import the CSS file

const ProductPages = ({ products, addToCart }) => {
  const navigate = useNavigate ();
  return (
    
<<<<<<< HEAD
  <div>
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <button onClick={() => { navigate('/cart') }}>
        My Cart
          </button>
      </div>
      {/* Add the "My Cart" button outside the product cards */}
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
      <button onClick={() => { navigate('/') }}>
       Home
          </button>
      </div>
=======
  






>>>>>>> parent of a9067f3 (Update ProductPages.js)
      <div className="container">
        <div className="row"> 
          {products.map(product => (
            <div className="col-md-4" key={product.id}>
              <Product
                id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                addToCart={addToCart}
              />
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default ProductPages;