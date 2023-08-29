import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import FeatureCard from './FeatureCard/FeatureCard';
import ProductCard from './ProductCard/ProductCard';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch(
        'https://fakestoreapi.com/products/categories'
      );
      const data = await response.json();
      setCategories(data);
    };
    fetchCategories();
  }, []);

  if (categories.length === 0) {
    return <Loading />;
  }

  return (
      <FeatureCard cards={categories} />
  );
};

export default Categories;
