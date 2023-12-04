import { useState, useEffect, useCallback } from "react";

const ProductSidebar = ({ products, uniqueBrands, brandCounts, onSelectedBrandsChange }) => {
    
    // console.log(uniqueBrands)

    // State for the "All Brands" checkbox
    const [allBrandsChecked, setAllBrandsChecked] = useState([true]);

    // Initializing the checkbox states for all brands as checked, conditionally
    const [brandCheckboxes, setBrandCheckboxes] = useState(
        uniqueBrands && uniqueBrands.length > 0
            ? uniqueBrands.reduce((acc, brand) => ({ ...acc, [brand]: true }), {})
            : {}
    );

    // Handle individual brand checkbox change
    const handleBrandCheckboxChange = (brand) => {
        const updatedCheckboxes = {
            ...brandCheckboxes,
            [brand]: !brandCheckboxes[brand]
        };
        setBrandCheckboxes(updatedCheckboxes);

        const allChecked = Object.values(updatedCheckboxes).every(Boolean);
        setAllBrandsChecked(allChecked);

        // Update selected brands
        const selected = allChecked ? uniqueBrands : Object.keys(updatedCheckboxes).filter(b => updatedCheckboxes[b]);
        onSelectedBrandsChange(selected);
    };

     // Handle "All Brands" checkbox change
     const handleAllBrandsCheckboxChange = () => {
        const newState = !allBrandsChecked;
        setAllBrandsChecked(newState);
        const updatedCheckboxes = uniqueBrands.reduce((acc, brand) => ({ ...acc, [brand]: newState }), {});
        setBrandCheckboxes(updatedCheckboxes);

         // Update selected brands
         onSelectedBrandsChange(newState ? uniqueBrands : []);
    }
    

    // Call onSelectedBrandsChange with all brands on initial render
    useEffect(() => {
        if (Object.keys(brandCheckboxes).length > 0) {
            onSelectedBrandsChange(uniqueBrands);
        }
    }, []); 



    


    // console.log("Selected Brands:   ", onSelectedBrandsChange)

    return (            
    <div className="col-lg-3 col-md-4">
    {/* <!-- Brand Start --> */}
    <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Filter by Brand</span></h5>
    <div className="bg-light p-4 mb-30">
        <form>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input 
                type="checkbox" 
                className="custom-control-input" 
                id="brand-all" 
                checked={allBrandsChecked}
                onChange={handleAllBrandsCheckboxChange}
            />
                    <label className="custom-control-label" htmlFor="brand-all">All Products</label>
                    <span className="badge border font-weight-normal">{products.length}</span>
            </div>
            {uniqueBrands.map((brand) => {
                return (
                <div key={brand} className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                    <input 
                        type="checkbox" 
                        className="custom-control-input" 
                        id={`brand-${brand}`} 
                        checked={brandCheckboxes[brand]}
                        onChange={() => handleBrandCheckboxChange(brand)}
                    />
                    <label className="custom-control-label" htmlFor={`brand-${brand}`}>{brand}</label>
                    
                    <span className="badge border font-weight-normal">{brandCounts[brand]}</span>
                </div>
            )})}
        </form>
    </div>
    {/* <!-- Brand End --> */}










    {/* <!-- Price Start --> */}
    {/* <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Filter by price</span></h5>
    <div className="bg-light p-4 mb-30">
        <form>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input type="checkbox" className="custom-control-input" id="price-all" />
                <label className="custom-control-label" htmlFor="price-all">All Price</label>
                <span className="badge border font-weight-normal">1000</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input type="checkbox" className="custom-control-input" id="price-1" />
                <label className="custom-control-label" htmlFor="price-1">$0 - $100</label>
                <span className="badge border font-weight-normal">150</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input type="checkbox" className="custom-control-input" id="price-2" />
                <label className="custom-control-label" htmlFor="price-2">$100 - $200</label>
                <span className="badge border font-weight-normal">295</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input type="checkbox" className="custom-control-input" id="price-3"/>
                <label className="custom-control-label" htmlFor="price-3">$200 - $300</label>
                <span className="badge border font-weight-normal">246</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input type="checkbox" className="custom-control-input" id="price-4"/>
                <label className="custom-control-label" htmlFor="price-4">$300 - $400</label>
                <span className="badge border font-weight-normal">145</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                <input type="checkbox" className="custom-control-input" id="price-5"/>
                <label className="custom-control-label" htmlFor="price-5">$400 - $500</label>
                <span className="badge border font-weight-normal">168</span>
            </div>
        </form>
    </div> */}
    {/* <!-- Price End --> */}
    
    {/* <!-- Color Start --> */}
    {/* <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Filter by color</span></h5>
    <div className="bg-light p-4 mb-30">
        <form>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input type="checkbox" className="custom-control-input" id="color-all" />
                <label className="custom-control-label" htmlFor="price-all">All Color</label>
                <span className="badge border font-weight-normal">1000</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input type="checkbox" className="custom-control-input" id="color-1" />
                <label className="custom-control-label" htmlFor="color-1">Black</label>
                <span className="badge border font-weight-normal">150</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input type="checkbox" className="custom-control-input" id="color-2" />
                <label className="custom-control-label" htmlFor="color-2">White</label>
                <span className="badge border font-weight-normal">295</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input type="checkbox" className="custom-control-input" id="color-3" />
                <label className="custom-control-label" htmlFor="color-3">Red</label>
                <span className="badge border font-weight-normal">246</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input type="checkbox" className="custom-control-input" id="color-4" />
                <label className="custom-control-label" htmlFor="color-4">Blue</label>
                <span className="badge border font-weight-normal">145</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                <input type="checkbox" className="custom-control-input" id="color-5" />
                <label className="custom-control-label" htmlFor="color-5">Green</label>
                <span className="badge border font-weight-normal">168</span>
            </div>
        </form>
    </div> */}
    {/* <!-- Color End --> */}

    {/* <!-- Size Start --> */}
    {/* <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Filter by size</span></h5>
    <div className="bg-light p-4 mb-30">
        <form>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input type="checkbox" className="custom-control-input" id="size-all" />
                <label className="custom-control-label" htmlFor="size-all">All Size</label>
                <span className="badge border font-weight-normal">1000</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input type="checkbox" className="custom-control-input" id="size-1" />
                <label className="custom-control-label" htmlFor="size-1">XS</label>
                <span className="badge border font-weight-normal">150</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input type="checkbox" className="custom-control-input" id="size-2" />
                <label className="custom-control-label" htmlFor="size-2">S</label>
                <span className="badge border font-weight-normal">295</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input type="checkbox" className="custom-control-input" id="size-3" />
                <label className="custom-control-label" htmlFor="size-3">M</label>
                <span className="badge border font-weight-normal">246</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input type="checkbox" className="custom-control-input" id="size-4" />
                <label className="custom-control-label" htmlFor="size-4">L</label>
                <span className="badge border font-weight-normal">145</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                <input type="checkbox" className="custom-control-input" id="size-5" />
                <label className="custom-control-label" htmlFor="size-5">XL</label>
                <span className="badge border font-weight-normal">168</span>
            </div>
        </form>
    </div> */}
    {/* <!-- Size End --> */}
</div>);
}

export default ProductSidebar;