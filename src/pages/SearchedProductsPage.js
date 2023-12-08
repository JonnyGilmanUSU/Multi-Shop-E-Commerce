import React, { useEffect, useState } from 'react';
import ProductTile from '../components/Products/ProductTile';
import ProductContext from '../store/product-context';
import { useContext } from 'react';
import ProductList from '../components/Products/ProductList';

const SearchedProductsPage = () => {
  const [searchTerm, setSearchTerm] = useState();
  const [searchedItems, setSearchedItems] = useState([]);
  const prodCtx = useContext(ProductContext);

  useEffect(() => {
    const savedSearchTerm = localStorage.getItem('searchTerm');

    if (savedSearchTerm) {
      setSearchTerm(savedSearchTerm); // Set the retrieved searchTerm in state
      const searchArray = prodCtx.searchProducts(savedSearchTerm); // Call the searchProducts function with the retrieved searchTerm
      setSearchedItems(searchArray);
  }
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const searchArray = prodCtx.searchProducts(searchTerm);
      setSearchedItems(searchArray);
    }
  }, [searchTerm]);

  console.log("SEARCH TERM: ", searchTerm)
  console.log("SEARCH ARRAY:  ", searchedItems)


  return (
    <div className='row px-xl-5' >
      {searchedItems.map((product) => {
        return (
          <ProductTile key={product.id} product={product} classes={"col-lg-3 col-md-4 col-sm-6 pb-1"} />
        );
      })}
    </div>
  );
}

export default SearchedProductsPage