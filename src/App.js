// App.js
import React, { useState } from 'react';
import ProductPages from './ProductPages';
import CartSummary from './CartSummary'; // Import the CartSummary component



function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (productId) => {
    const productToAdd = products.find(product => product.id === productId);
    setCart([...cart, productToAdd]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Product Pages</h1>
        <ProductPages products={products} addToCart={addToCart} />
        <CartSummary cart={cart} /> {/* Render the CartSummary component */}
      </header>
      <script>console.log("Hello World")</script>
    </div>
  );
}

export default App;
