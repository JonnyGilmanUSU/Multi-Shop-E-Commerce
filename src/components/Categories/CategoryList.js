
import { useContext } from "react";
import ProductContext from "../../store/product-context";
import formatCategory from "../../utils/formatCategory";
import { Link } from "react-router-dom";

const CategoryList = () => {

// Retrieve category names from context
 const prodCtx = useContext(ProductContext);
 const categories = prodCtx.getCategories();

// Make sure categories exist before rendering
  if (categories.length > 0) {
    return (
      <div className="container-fluid pt-5">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">Categories</span>
        </h2>
        <div className="row px-xl-5 pb-3">
          {categories.map((item) => {
            return (
              <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <Link className="text-decoration-none" to={`/products/category/${item.category}`}>
                  <div className="cat-item d-flex align-items-center mb-4">
                    <div
                      className="overflow-hidden" 
                      style={{ width: "100px", height: "100px" }}
                    >
                      <img className="img-fluid" src={item.thumbnail} alt="" />
                    </div>
                    <div className="flex-fill pl-3">
                      <h6>{formatCategory(item.category)}</h6>
                      <small className="text-body">{item.numProducts} Products</small>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

};

export default CategoryList;
