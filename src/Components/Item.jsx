import { AddToCartIcon, RemoveFromCartIcon } from './Icons.jsx';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

const Item = ({ product }) => {
  const { addToCart, cart, removeFromCart } = useContext(CartContext);
  const isInCart = cart.find((item) => item.id === product.id);
  const handleClick = (product) => {
    if (!isInCart) {
      addToCart(product);
    } else {
      removeFromCart(product);
    }
  };
  return (
    <div>
      <h3>{product.title} </h3>
      <img src={product.images[0]} alt={product.title} />
      <span>{product.description}</span>
      <p>
        <strong>Price</strong>${product.price}
      </p>

      <button onClick={() => handleClick(product)}>
        {' '}
        {!isInCart ? <AddToCartIcon /> : <RemoveFromCartIcon />}
      </button>
    </div>
  );
};

export default Item;
