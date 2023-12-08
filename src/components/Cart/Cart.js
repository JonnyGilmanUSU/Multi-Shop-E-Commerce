import React from 'react';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import { Link } from 'react-router-dom';
import { useRouteLoaderData } from 'react-router-dom';

const Cart = () => {

    // Context Variables
    const userData = useRouteLoaderData("root");
    // console.log("uSER DATA: ", userData)
    const cartCtx = useContext(CartContext);
    const products = cartCtx.items;
    // console.log("ITEMS: ", products)

    // Remove Item From Cart Handler
    const removeItemHandler = (productId) => {
        cartCtx.removeItem(productId)
    };

    // Increment Item Quantity
    const incrementQuantity = (productId) => {
        // console.log("DECREMENT")

        // // find current item and add one
        const currentItem = products.find(item => item.id === productId);
        // console.log("CURRENT ITEM", currentItem)

        if (currentItem) {
            const newQuantity = currentItem.quantity + 1;
            cartCtx.updateItemQuantity(productId, newQuantity);
        }
    };

    // Decrement Item Quantity
    const decrementQuantity = (productId) => {
        // console.log("DECREMENT")

        // // find current item and add one
        const currentItem = products.find(item => item.id === productId);
        // console.log("CURRENT ITEM", currentItem)

        if (currentItem && currentItem.quantity > 1) {
            const newQuantity = currentItem.quantity - 1;
            cartCtx.updateItemQuantity(productId, newQuantity);
        }
    };

    

  return (
    <div className="container-fluid">
        {cartCtx.numItems ? (
      <div className="row px-xl-5">
      <div className="col-lg-8 table-responsive mb-5">
          <table className="table table-light table-borderless table-hover text-center mb-0">
              <thead className="thead-dark">
                  <tr>
                      <th>Products</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th>Remove</th>
                  </tr>
              </thead>
              <tbody className="align-middle">
                  {products.map((product) => 
                   <tr key={product.id}>
                   <td className="align-middle"><img src={product.thumbnail} alt="" style={{width: "50px"}}/>{product.title}</td>
                   <td className="align-middle">${product.price}</td>
                   <td className="align-middle">
                       <div className="input-group quantity mx-auto" style={{width: "100px"}}>
                           <div className="input-group-btn">
                               <button className="btn btn-sm btn-primary btn-minus" 
                               onClick={() => decrementQuantity(product.id)}
                               >
                               <i className="fa fa-minus"></i>
                               </button>
                           </div>
                           <input type="text" className="form-control form-control-sm bg-secondary border-0 text-center" value={product.quantity}/>
                           <div className="input-group-btn">
                               <button className="btn btn-sm btn-primary btn-plus" 
                               onClick={() => incrementQuantity(product.id)}
                               >
                                   <i className="fa fa-plus"></i>
                               </button>
                           </div>
                       </div>
                   </td>
                   <td className="align-middle">${product.price * product.quantity}</td>
                   <td className="align-middle"><button className="btn btn-sm btn-danger" onClick={() => removeItemHandler(product.id)}><i className="fa fa-times"></i></button></td>
                  </tr>
                  )}
                 
              </tbody>
          </table>
      </div>
      <div className="col-lg-4">
          <form className="mb-30" action="">
              <div className="input-group">
                  <input type="text" className="form-control border-0 p-4" placeholder="Coupon Code"/>
                  <div className="input-group-append">
                      <button className="btn btn-primary">Apply Coupon</button>
                  </div>
              </div>
          </form>
          <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Cart Summary</span></h5>
          <div className="bg-light p-30 mb-5">
              <div className="border-bottom pb-2">
                  <div className="d-flex justify-content-between mb-3">
                      <h6>Subtotal</h6>
                      <h6>${cartCtx.subtotal}</h6>
                  </div>
                  <div className="d-flex justify-content-between">
                      <h6 className="font-weight-medium">Shipping</h6>
                      <h6 className="font-weight-medium">${cartCtx.shipping}</h6>
                  </div>
              </div>
              <div className="pt-2">
                  <div className="d-flex justify-content-between mt-2">
                      <h5>Total</h5>
                      <h5>${cartCtx.total}</h5>
                  </div>
                  
                      <button className="btn btn-block btn-primary font-weight-bold my-3 py-3">
                          {userData ? <Link to="/checkout" className="btn btn-block btn-primary font-weight-bold">Proceed To Checkout</Link> : (
                              <p>Please <Link to="/login" className="btn-primary font-weight-bold">Log In</Link> or  <Link to="/signup" className="btn-primary font-weight-bold" >Sign Up</Link> to Proceed To Checkout</p>
                          )}
                      </button>
              </div>
          </div>
      </div>
  </div>
        ) : <p>Your Cart is Empty. Head to <Link to="/categories" className="font-weight-bold">Categories</Link> to add items!</p> }
  
    </div>
  )
}

export default Cart