import { useContext, useId } from 'react';
import './Cart.css';

import { CartIcon, ClearCartIcon } from './Icons.jsx';
import { CartContext } from '../Context/CartContext';

function CartItem({ thumbnail, price, title, quantity, addToCart }) {
  return (
    <li>
      <img src={thumbnail} alt={title} />
      <div>
        <strong>{title}</strong> - ${price}
      </div>

      <footer>
        <small>Qty: {quantity}</small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  );
}

export function Cart() {
  const { cart, clearCart, addToCart, total } = useContext(CartContext);
  const cartCheckboxId = useId();
  const handleClick = () => {
    clearCart();
  };
  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />

      <aside className="cart">
        {cart.length === 0 ? (
          <h5>
            Aún no has añadido <br /> nada al carrito
          </h5>
        ) : (
          <>
            <ul>
              {cart.map((product) => (
                <CartItem
                  key={product.id}
                  addToCart={() => addToCart(product)}
                  {...product}
                />
              ))}
            </ul>
            <span>Total: ${total} </span>
            <button onClick={handleClick}>
              <ClearCartIcon />
            </button>
          </>
        )}
      </aside>
    </>
  );
}
