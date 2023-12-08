import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CategoryList from "./components/Categories/CategoryList";
import Layout from "./components/Layout/Layout";
import FeaturedProducts from "./components/Products/FeaturedProducts";
import { ProductContextProvider } from "./store/product-context";
import ErrorPage from "./pages/ErrorPage";
import ProductsByCategoryPage from "./pages/ProductsByCategoryPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ContactPage, {postContactAction} from "./pages/ContactPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import { authStatusLoader, loginAction, logoutLoader, placeOrderAction, signUpAction } from "./utils/auth";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import CheckOutPage from "./pages/CheckOutPage";
import { useContext } from "react";
import CartContext from "./store/cart-context";
import SearchedProductsPage from "./pages/SearchedProductsPage";




function App() {

  const cartCtx = useContext(CartContext);

  const router = createBrowserRouter([
    {path: '/', element: <Layout />, errorElement: <Layout><ErrorPage /></Layout>, loader: authStatusLoader, id:"root" , children: [
      {index: true, element: <FeaturedProducts/>},
      {path: 'categories', element: <CategoryList/>},
      {path: 'products/category/:category', element: <ProductsByCategoryPage/>},
      {path: 'products/:productID', element: <ProductDetailPage/>},
      {path: 'contact', element: <ContactPage/>, action: postContactAction},
      {path: 'signup', element: <SignUpPage/>, action: signUpAction},
      {path: 'login', element: <LoginPage/>, action: loginAction},
      {path: 'cart', element: <ShoppingCartPage/>},
      {path: 'checkout', element: <CheckOutPage/>, action: placeOrderAction(cartCtx)},
      {path: 'logout', loader: logoutLoader},
      {path: 'searched', element: <SearchedProductsPage/>}

    ]}
  ]);
  
  return (
    <ProductContextProvider>
      <RouterProvider router={router} />
    </ProductContextProvider>

  );
}

export default App;
