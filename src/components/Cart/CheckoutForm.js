import React from 'react';
import { Form } from 'react-router-dom';

const CheckoutForm = () => {
  return (
    <div className="container-fluid">
    <Form  method="post" name="placeOrder" id="contactForm" noValidate={false}> 
    <div className="row px-xl-5">
        <div className="col-lg-8">
            <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Billing Address</span></h5>
            <div className="bg-light p-30 mb-5">
                <div className="row">
                    <div className="col-md-6 form-group">
                        <label>First Name</label>
                        <input className="form-control" name="billingfirstname" type="text" placeholder="John"/>
                    </div>
                    <div className="col-md-6 form-group">
                        <label>Last Name</label>
                        <input className="form-control" name="billinglastname" type="text" placeholder="Doe"/>
                    </div>
                    <div className="col-md-6 form-group">
                        <label>E-mail</label>
                        <input className="form-control" type="text" name="billingemail" placeholder="example@email.com"/>
                    </div>
                    <div className="col-md-6 form-group">
                        <label>Mobile No</label>
                        <input className="form-control" type="text" name="billingmobilenumber" placeholder="+123 456 789"/>
                    </div>
                    <div className="col-md-6 form-group">
                        <label>Address Line 1</label>
                        <input className="form-control" type="text" name="billingadressline1" placeholder="123 Street"/>
                    </div>
                    <div className="col-md-6 form-group">
                        <label>Address Line 2</label>
                        <input className="form-control" type="text" name="billingadressline2" placeholder="123 Street"/>
                    </div>
                    <div className="col-md-6 form-group">
                        <label>Country</label>
                        <select className="custom-select">
                            <option selected>United States</option>
                            <option>Afghanistan</option>
                            <option>Albania</option>
                            <option>Algeria</option>
                        </select>
                    </div>
                    <div className="col-md-6 form-group">
                        <label>City</label>
                        <input className="form-control" name="billingcity" type="text" placeholder="New York"/>
                    </div>
                    <div className="col-md-6 form-group">
                        <label>State</label>
                        <input className="form-control" type="text" name="billingstate" placeholder="New York"/>
                    </div>
                    <div className="col-md-6 form-group">
                        <label>ZIP Code</label>
                        <input className="form-control" type="text" name="billingzipcode" placeholder="123"/>
                    </div>
                    <div className="col-md-12 form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="newaccount"/>
                            <label className="custom-control-label" htmlFor="newaccount">Create an account</label>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="shipto"/>
                            <label className="custom-control-label" htmlFor="shipto"  data-toggle="collapse" data-target="#shipping-address">Ship to different address</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="collapse mb-5" id="shipping-address">
                <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Shipping Address</span></h5>
                <div className="bg-light p-30">
                    <div className="row">
                        <div className="col-md-6 form-group">
                            <label>First Name</label>
                            <input className="form-control" name="shippinhfirstname" type="text" placeholder="John"/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>Last Name</label>
                            <input className="form-control" type="text" name="shippinhlastname" placeholder="Doe"/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>E-mail</label>
                            <input className="form-control" type="text" name="shippinhemail" placeholder="example@email.com"/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>Mobile No</label>
                            <input className="form-control" type="text" name="shippinhmobilenumber" placeholder="+123 456 789"/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>Address Line 1</label>
                            <input className="form-control" type="text" name="shippinhadressline1" placeholder="123 Street"/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>Address Line 2</label>
                            <input className="form-control" type="text" name="shippinhadressline2" placeholder="123 Street"/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>Country</label>
                            <select className="custom-select">
                                <option selected>United States</option>
                                <option>Afghanistan</option>
                                <option>Albania</option>
                                <option>Algeria</option>
                            </select>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>City</label>
                            <input className="form-control" type="text" name="shippinhcity" placeholder="New York"/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>State</label>
                            <input className="form-control" type="text" name="shippinhstate" placeholder="New York"/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>ZIP Code</label>
                            <input className="form-control" type="text" name="shippinhzipcode" placeholder="123"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-4">
            <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Order Total</span></h5>
            <div className="bg-light p-30 mb-5">
                <div className="border-bottom">
                    <h6 className="mb-3">Products</h6>
                    <div className="d-flex justify-content-between">
                        <p>Product Name 1</p>
                        <p>$150</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p>Product Name 2</p>
                        <p>$150</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p>Product Name 3</p>
                        <p>$150</p>
                    </div>
                </div>
                <div className="border-bottom pt-3 pb-2">
                    <div className="d-flex justify-content-between mb-3">
                        <h6>Subtotal</h6>
                        <h6>$150</h6>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h6 className="font-weight-medium">Shipping</h6>
                        <h6 className="font-weight-medium">$10</h6>
                    </div>
                </div>
                <div className="pt-2">
                    <div className="d-flex justify-content-between mt-2">
                        <h5>Total</h5>
                        <h5>$160</h5>
                    </div>
                </div>
            </div>
            <div className="mb-5">
                <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Payment</span></h5>
                <div className="bg-light p-30">
                    <div className="form-group">
                        <div className="custom-control custom-radio">
                            <input type="radio" className="custom-control-input" name="payment" id="paypal"/>
                            <label className="custom-control-label" htmlFor="paypal">Paypal</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="custom-control custom-radio">
                            <input type="radio" className="custom-control-input" name="payment" id="directcheck"/>
                            <label className="custom-control-label" htmlFor="directcheck">Direct Check</label>
                        </div>
                    </div>
                    <div className="form-group mb-4">
                        <div className="custom-control custom-radio">
                            <input type="radio" className="custom-control-input" name="payment" id="banktransfer"/>
                            <label className="custom-control-label" htmlFor="banktransfer">Bank Transfer</label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-block btn-primary font-weight-bold py-3">Place Order</button>
                </div>
            </div>
        </div>
    </div>
    </Form>
</div>
  )
}

export default CheckoutForm;