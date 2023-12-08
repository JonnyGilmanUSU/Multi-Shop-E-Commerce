import TopBar from "./TopBar";
import NavBar from "./Navbar";
import Footer from "./Footer";
import { BallTriangle } from "react-loader-spinner";
import { Outlet, useNavigation } from "react-router-dom";
import { useState, useEffect } from "react";



const Layout = (props) => {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  const isSubmitting = navigation.state === 'submitting';
  const displayLoaderSpinner = isLoading || isSubmitting;


      
    return (
        <>
        <TopBar />
        <NavBar />
        {
        displayLoaderSpinner 
        ? <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#4fa94d"
          ariaLabel="ball-triangle-loading"
          wrapperClass={{}}
          wrapperStyle=""
          visible={true}
        />
      </div>
        : props.children ?? <Outlet />
      }
        <Footer />
      </>
    )
}

export default Layout;