import React from 'react';
import { useState } from 'react';
import SignUpForm from '../components/Auth/SignUpForm';
import Location from '../components/Contact/Location';
import { useActionData } from 'react-router-dom';

const SignUpPage = () => {
  const data = useActionData();

  if (data && data.request.status !== 200) 
    // An error has occurred
    {
      <>
      <p>Oops, an error occurred:</p>
      <p>{data.message} {data.response.data.error.message}</p>
      </>
    }


  return (
    <div className="container-fluid">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3"> Sign Up</span></h2>
        <div className="row px-xl-5">
            <SignUpForm/>
        
        </div>
    </div>      
  )
}

export default SignUpPage