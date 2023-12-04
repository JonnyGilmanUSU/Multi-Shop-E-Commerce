import React, { useContext, useEffect, useState, useMemo, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import Container from '../components/Layout/Container';
import ProductSidebar from '../components/Products/ProductSidebar';
import ProductsByCategory from '../components/Products/ProductsByCategory';
import ProductContext from '../store/product-context';


const ProductsByCategoryPage = () => {
  
  // Category name retreived for routing
  const { category } = useParams();

  // New state for keeping track of selected brands
  const [selectedBrands, setSelectedBrands] = useState([]);


  // Product Context
  const prodCtx = useContext(ProductContext);
  const products = prodCtx.getProductsByCategory(category);

  // # of Products In Each Brand
  const brandCounts = products.reduce((counts, product) => {
    counts[product.brand] = (counts[product.brand] || 0) + 1;
    return counts;
    }, {});

  // Unique Brand Names
  const uniqueBrands = useMemo(() => Object.keys(brandCounts), [products]); 



  // Function to update selected brands
  const handleSelectedBrandsChange = useCallback((brands) => {
    setSelectedBrands(brands);
    }, [selectedBrands]);

  
    
  const productsFiltered = products.filter(product => selectedBrands.includes(product.brand))
  


  // console.log("Selected Brands:   ", selectedBrands)



  return (
    <Container classNames="container-fluid">
        <Container classNames="row px-xl-5">
            <ProductSidebar 
              products={products}
              uniqueBrands={uniqueBrands}
              brandCounts={brandCounts}
              selectedBrands={selectedBrands}
              onSelectedBrandsChange={handleSelectedBrandsChange}
            />
            <ProductsByCategory 
              category={category}
              productsFiltered={productsFiltered}/>
        </Container>
    </Container>
  )
}

export default ProductsByCategoryPage