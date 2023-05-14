import { useContext } from 'react';
import './Footer.css';
import { FiltersContext } from '../Context/FiltersContext';
import { CartContext } from '../Context/CartContext';

function Footer() {
  const { filters } = useContext(FiltersContext);
  const { cart } = useContext(CartContext);
  const cartTitles = cart.map((item) => `${item.title} ${item.quantity},`);
  return (
    <footer className="footer">
      {JSON.stringify(filters)}
      {cartTitles}
    </footer>
  );
}
export default Footer;
