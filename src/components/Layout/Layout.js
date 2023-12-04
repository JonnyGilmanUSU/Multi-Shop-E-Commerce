import TopBar from "./TopBar";
import NavBar from "./Navbar";
import Footer from "./Footer";
import { BallTriangle } from "react-loader-spinner";
import { Outlet, useNavigation } from "react-router-dom";



const Layout = (props) => {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  const isSubmitting = navigation.state === 'submitting';
  const displayLoaderSpinner = isLoading || isSubmitting;
  // console.log(navigation.state)
  
      
    return (
        <>
        <TopBar />
        <NavBar />
        {props.children ?? <Outlet />}
        {displayLoaderSpinner && 
            <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            wrapperClass={{}}
            wrapperStyle=""
            visible={true}
          /> }
        <Footer />
      </>
    )
}

export default Layout;