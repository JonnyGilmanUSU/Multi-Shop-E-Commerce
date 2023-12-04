import React from 'react';
import ProductDetail from '../components/Products/ProductDetail';
import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
  const { productID } = useParams();
  return (
    <ProductDetail productID={productID}/>
  )
}

export default ProductDetailPage