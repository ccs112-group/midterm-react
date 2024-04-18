// ProductPages.js
import React from 'react';
import Product from './Product';
import {useNavigate } from 'react-router-dom'; // Import Link from react-router-dom
import '../App.css'; // Import the CSS file

const ProductPages = ({ products, addToCart }) => {
  const navigate = useNavigate ();
  return (
    
  






      <div>
        <div > 
          {products.map(product => (
            <div  key={product.id}>
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