import React from 'react';
import { useState, useEffect} from 'react';
import { Form, useActionData} from 'react-router-dom';


const ContactForm = () => {
    const data = useActionData();
    const [requestId, setRequestId] = useState(null);
    const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);
   


    useEffect(() => {
        if (data && data.request.status === 200) {
            setRequestId(data.data.name);
            setIsSubmittedSuccessfully(true);
        }
    }, [data]);



  return (
    <div className="col-lg-7 mb-5">
    <div className="contact-form bg-light p-30">
        <div id="success"></div>
        <Form method="post" name="sentMessage" id="contactForm" noValidate={false}>
            <div className="control-group">
                <input 
                    type="text" 
                    className="form-control" 
                    id="name" 
                    placeholder="Your Name"
                    required="required" 
                    data-validation-required-message="Please enter your name" 
                    name="name"
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
                    type="text" 
                    className="form-control" 
                    id="subject" 
                    placeholder="Subject"
                    required="required"
                    data-validation-required-message="Please enter a subject" 
                    name="subject"
                />
                <p className="help-block text-danger"></p>
            </div>
            <div className="control-group">
                <textarea 
                    className="form-control" 
                    rows="8" id="message" 
                    placeholder="Message"
                    required="required"
                    data-validation-required-message="Please enter your message"
                    name="message"
                >
                    
                    </textarea>
                <p className="help-block text-danger"></p>
            </div>
            <div>
                <button className="btn btn-primary py-2 px-4" type="submit" id="sendMessageButton">Send
                    Message</button>
            </div>
            {isSubmittedSuccessfully && (
                    <div>
                        <p>Thank you for submitting your contact request.</p>
                        <p>Your request id is {requestId}</p>
                    </div>
                )}
         
        </Form>
    </div>
</div>
  )
}

export default ContactForm