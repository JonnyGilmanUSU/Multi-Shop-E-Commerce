import axios from "axios";
import axiosInstance from "./db";
import { redirect, json} from "react-router-dom";
import CartContext from "../store/cart-context";
import { useCallback } from "react";


// Function for sending signup/login requests to Firebase auth service
const sendAuthRequest = async (email, password, endpoint) => {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:${endpoint}?key=AIzaSyB2RzMMasCRY01Byuz2pdOqSNkfs7xAVcM`;

    // Send a request to auth endpoint
    const response = await axios.post(url, {
        email: email,
        password: password,
        returnSecureToken: true
    });

    return response;
};

// Sign Up Action Function
export const signUpAction = async ({ request }) => {

    const data = await request.formData();
    console.log(data)

    const firstname = data.get('firstname');
    const lastname = data.get('lastname');
    const email = data.get('email');
    const password = data.get('password');

    // Send a signUp auth request to the FireBase API
    // Receive user Auth Data (token, userid, etc)

    try{
        const AuthResponse = await sendAuthRequest(email, password, "signUp");
        console.log("Auth response is:  ", AuthResponse)

        // Proceed if request was successful
        if (AuthResponse.status === 200){
            console.log("Worked")

            // Extract the needed data from the response
            console.log("Attempting")
            const {expiresIn, idToken: token, localId: userId} = AuthResponse.data;
            console.log("AuthResponse Data: ", AuthResponse.data)

            // Set an expiration date for the token
            const expires = new Date();
            expires.setSeconds(expires.getSeconds() + +expiresIn);

            console.log("Expires in:    ", expires)

            // Create a custom userData object to store in Local Storage
            const userData = {
                firstname,
                lastname,
                email,
                token,
                localId: userId,
                expiration: expires
            };

            console.log("User Data:  ", userData)

            //  // Store user data (including token) in localStorage for access by other components
            localStorage.setItem("userData", JSON.stringify(userData))
    

            // Write a user record to the database through axios instance
                const insertResponse = await axiosInstance({
                method:'PUT',
                url: `/users/${userId}.json`,
                data:  {
                    firstname,
                    lastname,
                    email,
                    userId
                }
            });
            

            // Redirect the user to another page
            return redirect('..')
        }
    }

    catch (error) {
        console.log("Signup Error:  ", error)
        return error;
    }

}



// Login Action Function
export const loginAction = async ({ request }) => {
    
  // Retrieve the data submitted in the form
    const data = await request.formData();

    const email = data.get("email");
    const password = data.get("password");

    // Send a signInWithPassword auth request to the Firebase API.
    // Receive user auth data (token, user id, etc.)
    try {
        const response = await sendAuthRequest(email, password, "signInWithPassword");
        console.log("Auth response is: ", response);

        // proceed if response successful
        if (response.status === 200) {
            // Extract the needed data from the response
            const { expiresIn, idToken: token, localId: userId } = response.data;

            // Set an expiration date for the token
            const expires = new Date();
            expires.setSeconds(expires.getSeconds() + +expiresIn);

            // Get the user record from the database
            const fetchResponse = await axiosInstance({
                method:'GET',
                url: `/users/${userId}.json`,
            });

            console.log("fetch response is: ", fetchResponse);

            const { firstname, lastname, email } = fetchResponse.data;

            // Create a custom userData object to store in localStorage
            const userData = {
                firstname,
                lastname,
                email,
                token,
                userId,
                expires
            };

            // Store user data (including token) in localStorage for access
            // by other components

            localStorage.setItem("userData", JSON.stringify(userData));

            // Redirect the user to another page
            return redirect("..");
        }
    }
    
    // Catches and returns error message
    catch (error) {
        console.log(error)
        return error
    }
};


// logout loader removes data from local storage
export const logoutLoader = () => {
    localStorage.removeItem("userData");
    return redirect('/categories');
    console.log("logged out")
};

export const authStatusLoader = () => {
    // Retrieve user data from local storage
    const userDataJSON = localStorage.getItem("userData");
    
    if (!userDataJSON) {
        // If no user data is found, redirect to the login page
        console.log("User data is null")
        return null;
    }

     // Parse the user data from JSON
    const userData = JSON.parse(userDataJSON);


    // Check if the token has expired
    const currentTimestamp = new Date().getTime();
    const expirationTimestamp = new Date(userData.expires).getTime();

    if (currentTimestamp >= expirationTimestamp) {
        // If the token has expired, remove user data and redirect to the login page
        localStorage.removeItem("userData");
        return redirect('/logout');
    }

    // // If the token is still valid, return the userData object
    console.log("Returning user data")
    return userData;
 
};


export const placeOrderAction = (cartCtx) => async ({request}) => {    

    // Get access to CheckOut Form Data
    const data = await request.formData();

    // Billing Info Data
    const billingInfo = {
        billingFirstName: data.get("billingfirstname"),
        billingLastName: data.get("billinglastname"),
        billingEmail: data.get("billingemail"),
        billingMobileNumber: data.get("billingmobilenumber"),
        billingAddressLine1: data.get("billingadressline1"),
        billingAddressLine2: data.get("billingadressline2"),
        billingCity: data.get("billingcity"),
        billingState: data.get("billingstate"),
        billingZipCode: data.get("billingzipcode")
    }

    // Shipping Info Data
    const shippingInfo = {
        shippingFirstName: data.get("shippingfirstname") || billingInfo.billingFirstName,
        shippingLastName: data.get("shippinglastname") || billingInfo.billingLastName,
        shippingEmail: data.get("shippingemail") || billingInfo.billingEmail,
        shippingMobileNumber: data.get("shippingmobilenumber") || billingInfo.billingMobileNumber,
        shippingAddressLine1: data.get("shippingaddressline1") || billingInfo.billingAddressLine1,
        shippingAddressLine2: data.get("shippingaddressline2") || billingInfo.billingAddressLine2,
        shippingCity: data.get("shippingcity") || billingInfo.billingCity,
        shippingState: data.get("shippingstate") || billingInfo.billingState,
        shippingZipCode: data.get("shippingzipcode") || billingInfo.billingZipCode
    }

    // Cart Context Data
    const subtotal = cartCtx.subtotal;
    const userId = localStorage.getItem('userId');
    const shipping = cartCtx.shipping;
    const total = cartCtx.total;
    const orderDate = new Date();
    const orderStatus = "pending";
 
    // Creating Order Dat Object
    const orderData = {
        userId: userId,
        billingInfo: billingInfo,
        shippingInfo: shippingInfo,
        subtotal: subtotal,
        shipping: shipping,
        total: total,
        orderDate: orderDate.toISOString(),
        orderStatus: orderStatus
    }

    console.log("Order Data:    ", orderData)

    try {
        // Post Order Data Object to Firebase at /orders
        const placeOrderResponse = await axiosInstance({
            method: "POST",
            url: '/orders.json',
            data: orderData
    });

    console.log("Order placed succesfully");

    return redirect("/")
    }

    catch (error){
        console.log("error: ", error)
    }

}