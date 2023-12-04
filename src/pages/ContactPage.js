import React from 'react';
import { json, redirect } from 'react-router-dom';
import ContactForm from '../components/Contact/ContactForm';
import Location from '../components/Contact/Location';
import axiosInstance from '../utils/db';
import axios from 'axios';

const ContactPage = () => {
    
  return (
    <div className="container-fluid">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Contact Us</span></h2>
        <div className="row px-xl-5">
            <ContactForm/>
            <Location/>
        </div>
    </div>      
  )
}

export default ContactPage


export const postContactAction = async ({request}) => {
  const data = await request.formData();

  const contactData ={
    name: data.get("name"),
    email: data.get("email"),
    subject: data.get("subject"),
    message: data.get("message")
  }

  
  // Axios Post Request
  try {
    const response = await axiosInstance({
      method:'POST',
      url: '/contact.json',
      data: contactData
    });
  
    // Check if the status code is in the range 200-299 (success)
    if (response.status < 200 || response.status >= 300) {
      console.log("Non-success status code: ", response.status);
      throw json({ message: "Error in posting contact data" }, { status: response.status });
    }
    console.log(response)
    return response;
  }
  
  catch (error) {
    console.error("Error occurred while posting contact data", error);
    throw json({ message: "Could not post Contact Data" }, { status: 500 });
  }




  
}

