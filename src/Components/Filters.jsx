import React, { useContext, useId, useState } from 'react';
import './Filters.css';
import { FiltersContext } from '../Context/FiltersContext';

function Filters() {
  const { setFilters, filters } = useContext(FiltersContext);
  const maxPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleChangePrice = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      maxPrice: event.target.value,
    }));
  };
  const handleChangeCategory = (e) => {
    setFilters((prevState) => ({
      ...prevState,
      category: e.target.value,
    }));
  };

  return (
    <section className="filters">
      <div>
        <label htmlFor={maxPriceFilterId}>Price</label>
        <input
          onChange={handleChangePrice}
          value={filters.maxPrice}
          type="range"
          id={maxPriceFilterId}
          min={0}
          max={5000}
        />
        <span>$ {filters.maxPrice} </span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Category</label>
        <select onChange={handleChangeCategory} id={categoryFilterId}>
          <option value="all">All</option>
          <option value="laptops">Laptops</option>
          <option value="home-decoration">Home Decoration</option>
        </select>
      </div>
    </section>
  );
}

export default Filters;
