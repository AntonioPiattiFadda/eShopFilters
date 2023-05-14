import { useContext, useState } from 'react';
import products from '../mocks/products.json';
import { FiltersContext } from '../Context/FiltersContext';
export function useProducts() {
  const { filters, setFilters } = useContext(FiltersContext);

  const listOfProducts = products.products;

  const filteredProducts = listOfProducts.filter((product) => {
    return (
      product.price <= filters.maxPrice &&
      (filters.category === 'all' || product.category === filters.category)
    );
  });
  return { filteredProducts, setFilters, filters };
}
