import ProductTile from "./ProductTile";
import { useContext } from "react";
import ProductContext from "../../store/product-context";

const ProductList = ({ products, classes, tileClasses }) => {
  const prodCtx = useContext(ProductContext);
  const filteredSearchedItems = prodCtx.searchProducts;
  console.log(filteredSearchedItems)


  

 

  return (
    <div className={classes}>
      {products.map((product) => {
        return (
          <ProductTile key={product.id} product={product} classes={tileClasses} />
        );
      })}
    </div>
  );
};

export default ProductList;
