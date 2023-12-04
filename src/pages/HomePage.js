import React from 'react';
import FeaturedProducts from '../components/Products/FeaturedProducts';
import { ProductContextProvider } from '../store/product-context';

const HomePage = () => {
  return (
    <ProductContextProvider>
      <FeaturedProducts/>
    </ProductContextProvider>
  )
}

export default HomePage