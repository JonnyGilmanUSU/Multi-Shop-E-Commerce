import React from 'react'
import { Form } from 'react-router-dom'

const SignUpForm = () => {
  return (
    <div className="col-lg-7 mb-5">
    <div className="contact-form bg-light p-30">
        <div id="success"></div>
            <Form method="post" name="sentMessage" id="contactForm" action='/signup' noValidate={false}>
            <div className="control-group">
                <input 
                    type="text" 
                    className="form-control" 
                    id="firstname" 
                    placeholder="First Name"
                    required="required" 
                    data-validation-required-message="Please enter your name" 
                    name="firstname"
                />
                <p className="help-block text-danger"></p>
            </div>
            <div className="control-group">
                <input 
                    type="text" 
                    className="form-control" 
                    id="lastname" 
                    placeholder="Last Name"
                    required="required" 
                    data-validation-required-message="Please enter your last name" 
                    name="lastname"
                />
                <p className="help-block text-danger"></p>
            </div>
            <div className="control-group">
                <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    placeholder="Your Email"
                    required="required" 
                    data-validation-required-message="Please enter your email"
                    name="email"
                />
                <p className="help-block text-danger"></p>
            </div>
            <div className="control-group">
                <input 
                    type="password" 
                    className="form-control" 
                    id="password" 
                    placeholder="Password"
                    required="required"
                    data-validation-required-message="Please enter a password" 
                    name="password"
                />
                <p className="help-block text-danger"></p>
            </div>

            <div>
                <button className="btn btn-primary py-2 px-4" type="submit" id="sendMessageButton">Submit</button>
            </div>
            </Form>
    </div>
    </div>
  )
}

export default SignUpForm;