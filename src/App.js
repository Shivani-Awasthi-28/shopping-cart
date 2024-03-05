import React, { useState } from 'react';
 import './App.css';
const Product = ({ name, onAddToCart }) => {
  const [quantity, setQuantity] = useState(0);

  const productIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onAddToCart(name, newQuantity);
  };

  const productDecrement = () => {
    if (quantity > 0) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onAddToCart(name, newQuantity);
    }
   //else {quantity===0}{delete updatedCart[item.name]}
  };

  return (
    <div>
      <div>
        <span>{name}</span>
        <button className='btn1' onClick={productIncrement}>+</button>
        <span>{quantity}</span>
        <button className='btn2' onClick={productDecrement}>-</button>
      </div>
    </div>
  );
};

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (productName, productQuantity) => {
    // let updatedCart;
    // if (productQuantity === 0) {
    //   // Remove the item from the cart if quantity is 0
    //   updatedCart = cart.filter(item => item.name !== productName);
    // }else

    const updatedCart = cart.map(item => (item.name === productName ? { ...item, quantity: productQuantity } : item));
    
    if (!updatedCart.some(item => item.name === productName)) {
      updatedCart.push({ name: productName, quantity: productQuantity });
    }

    setCart(updatedCart);
  };

  return (
    <div className='vegitables'>
      <h1 className='nav'>ShoppingCart</h1>
     <h3 className='product1'>ProductList</h3>
      <div className='p'>
      <div className="q"><Product name="Tomato" onAddToCart={addToCart} /></div>
      <div  className="q"><Product name="Potato" onAddToCart={addToCart} /></div>
      <div className="q"><Product name="Onion" onAddToCart={addToCart} /></div>
      <div className="q"><Product name="Raddish" onAddToCart={addToCart} /></div>
      <div className="q"><Product name="Carrot" onAddToCart={addToCart} /></div>
      <div className="q"><Product name="Peas" onAddToCart={addToCart} /></div>
      <div className="q"><Product name="Corn" onAddToCart={addToCart} /></div>
      <div className="q"><Product name="Brinjal" onAddToCart={addToCart} /></div>
      <div className="q"><Product name="Capsicum" onAddToCart={addToCart} /></div>
      <div className="q"><Product name="Cauliflower" onAddToCart={addToCart} /></div>
      <div className="q"><Product name="Musroom" onAddToCart={addToCart} /></div>
      <div className="q"><Product name="Pumpkin" onAddToCart={addToCart} /></div>
      <div className="q"><Product name="Broccoli" onAddToCart={addToCart} /></div>
      <div className="q"><Product name="Cabbage" onAddToCart={addToCart} /></div>
</div>

      <div className='co'>
        <h2 className='cart1'>Cart</h2>
        {cart.map((item, index) => 
        (
          <div className='cart1' key={index}>
            {item.name} - {item.quantity}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
