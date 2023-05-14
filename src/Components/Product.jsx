import './Product.css';
import Item from './Item';

const ProductList = ({ filteredProducts }) => {
  return (
    <main className="products">
      <ul>
        {filteredProducts.map((product) => {
          return (
            <li key={product.id}>
              <Item product={product} />
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default ProductList;
