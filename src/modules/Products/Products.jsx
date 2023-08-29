import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import Categories from '../../components/Categories';
import Loading from '../../components/Loading';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <Categories />
      <div className='flex flex-col text-center w-full'>
        <h2 className='text-xs text-blue-500 tracking-widest font-medium title-font mb-1'>
          PRODUCTS
        </h2>
        <h1 className='sm:text-3xl text-2xl font-medium title-font text-gray-900'>
          ALL PRODUCTS
        </h1>
      </div>
      {products.length > 0 ? <ProductCard products={products} /> : <Loading />}
    </div>
  );
};

export default Products;
