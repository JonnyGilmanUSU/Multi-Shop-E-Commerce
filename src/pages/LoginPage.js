import React from 'react'
import SignUpForm from '../components/Auth/SignUpForm'
import LoginForm from '../components/Auth/LoginForm'

const LoginPage = () => {
  return (
    <div className="container-fluid">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Login</span></h2>
        <div className="row px-xl-5">
            <LoginForm/>
        </div>
    </div>      
  )
}

export default LoginPage