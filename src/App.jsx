import './App.css';
import Header from './Components/Header';
import Product from './Components/Product';
import Footer from './Components/Footer';
import { useProducts } from './Hooks/useProducts';
import { Cart } from './Components/Cart';
import { CartProvider } from './Context/CartContext';

function App() {
  const { filteredProducts } = useProducts();
  return (
    <>
      <CartProvider>
        <Header />
        <Cart />
        <Product filteredProducts={filteredProducts} />
        <Footer />
      </CartProvider>
    </>
  );
}

export default App;
