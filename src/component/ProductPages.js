 // ProductPages.js
import React from 'react';
import Product from './Product';
import '../App.css'; // Import the CSS file

const ProductPages = ({ products, addToCart }) => {
  return (
    <div class="cardPage">
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