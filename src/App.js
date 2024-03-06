
import React, { useState } from 'react';
const productsList = [
  { id: 'a', name: 'Tomato' },
  { id: 'b', name: 'Potato' },
  { id: 'c', name: 'Onion' },
  { id: 'd', name: 'Raddish' },
  { id: 'e', name: 'Carrot' },
  { id: 'f', name: 'Peas' },
  { id: 'g', name: 'Corn' },
  { id: 'h', name: 'Brinjal' },
  { id: 'i', name: 'Capsicum' },
  { id: 'j', name: 'Cauliflower' },
  { id: 'k', name: 'Mashroom' },
  { id: 'l', name: 'Pumpkin' },
  { id: 'm', name: 'Broccoli' },
  { id: 'n', name: 'Cabbage' },
];
const Product = ({ name, onAddToCart }) => {
  const [quantity, setQuantity] = useState(0);
  const ProductIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onAddToCart(name, newQuantity);
  };
  const ProductDecrement = () => {
    if (quantity > 0) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onAddToCart(name, newQuantity);
    }
  };
  return (
    <div>
      <div>
        <span>{name}</span>
        <button onClick={ProductIncrement}>+</button>
        <span>{quantity}</span>
        <button onClick={ProductDecrement}>-</button>
      </div>
    </div>
  );
};
const App = () => {
  const [cart, setCart] = useState([]);
  const addToCart = (productName, productQuantity) => {
    const updatedCart = cart.map(item =>
      item.name === productName ? { ...item, quantity: productQuantity } : item
    );
    if (!updatedCart.some(item => item.name === productName)) {
      updatedCart.push({ name: productName, quantity: productQuantity });
    }
    setCart(updatedCart);
  };
  return (

    <div className='pro'>
      <h1 className='nav'>ShoppingCart</h1>
      <div className='p'>
        {productsList.map(product => (
          <div key={product.id} className={product.id}>
            <Product name={product.name} onAddToCart={addToCart} />
          </div>
        ))}
      </div>
      <div className='co'>
        <h2>Your Cart</h2>
        {cart.map((item, index) => (
          <div key={index}>
            {item.name} - {item.quantity}
          </div>
        ))}
      </div>
    </div>
  );
};
export default App;
