import React, { useState, useEffect } from 'react';
import { Form } from 'react-router-dom';
import { useActionData } from 'react-router-dom';

const LoginForm = () => {
    const data = useActionData();
    console.log(data)
    const [loginErrMsg, setLoginErrMsg] = useState('');

    useEffect(() => {
        if (data && data.response.request.status === 400) {
            const errorMessage = data.response.data.error.message;
            setLoginErrMsg(errorMessage);
        }
    }, [data]);

  return (

    <div className="col-lg-7 mb-5">
    <div className="contact-form bg-light p-30">
        <div id="success"></div>
            <Form method="post" name="sentMessage" id="contactForm" noValidate={false}>
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
                        placeholder="password"
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
            {loginErrMsg && <p style={{color: 'red', paddingTop: '1rem'}}>{loginErrMsg}</p>}
        </div>
    </div>
  )
}

export default LoginForm