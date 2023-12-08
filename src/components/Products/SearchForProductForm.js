import React from 'react';
import { useContext, useState, useEffect } from 'react';
import ProductContext from '../../store/product-context';
import { useNavigate } from 'react-router-dom';

const SearchForProductForm = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const { searchProducts } = useContext(ProductContext)
    const navigate = useNavigate();




    const handleSearch = (event) => {
        // event.preventDefault();
        searchProducts(searchTerm);
        console.log("SEARCH TERM IN FORM COMPONENT: ", searchTerm);
        navigate('/searched');
    }



    

  return (
    <div className="col-lg-4 col-6 text-left">
        <form action="" onSubmit={handleSearch}>
            <div className="input-group">
                <input 
                    type="text"
                    value={searchTerm}
                    className="form-control" 
                    placeholder="Search for products" 
                    onChange={(e) => setSearchTerm(e.target.value)}
                    />
                <div className="input-group-append">
                    <span className="input-group-text bg-transparent text-primary">
                        <button type="submit" className="fa fa-search"></button>
                    </span>
                </div>
            </div>
        </form>
    </div>
  )
}

export default SearchForProductForm