import { createContext, useState, useEffect } from "react";
import { json } from "react-router-dom";


const CartContext = createContext({
    items: [],
    numItems: 0,
    subtotal: 0,
    shipping: 0,
    total: 0,
    addItem: (product) => {},
    removeItem: (productId) => {},
    updateItemQuantity: (productId, newQuantity) => {},
    resetCart: () => {},
});

export const CartContextProvider = (props) => {
    
    // State management to control items in the cart
    const [items, setItems] = useState([]);

    // On initial load, check if session storage has items, if not set items to an empty array
    useEffect(() => {
        let storedItems = sessionStorage.getItem('cart');
        if (storedItems) {
            setItems(JSON.parse(storedItems));
        } else{
            setItems([]);
        }
    }, []);


    // Add item function
    const addItem = (product) => {
        // Checks to see if item exists in cart already.
        const existingItemIndex = items.findIndex(item => item.id === product.id);

        // initialize updatedItems
        let updatedItems;
        // If the item exists in the cart, update the quantity
        if (existingItemIndex >= 0) {
            updatedItems = [...items];
            updatedItems[existingItemIndex] = {
                ...updatedItems[existingItemIndex],
                quantity: updatedItems[existingItemIndex].quantity + product.quantity
            };
        } else {
            // Item doesnt exist in cart
            updatedItems = [...items, product]
        }
        
        setItems(updatedItems);
        sessionStorage.setItem('cart', JSON.stringify(updatedItems))        
    };

    // Remove item function
    const removeItem = (productId) => {
        const itemsAfterRemoved = items.filter(item => item.id !== productId);
        setItems(itemsAfterRemoved);
        sessionStorage.setItem('cart', JSON.stringify(itemsAfterRemoved))       
    };

    // Update Item Quantity function
    const updateItemQuantity = (productId, newQuantity) => {
        // console.log("CONTEXT PRODUCT ID", productId)
        // console.log("NEW QUANTITY", newQuantity)

           // Find the index of the item in the array
        const existingItemIndex = items.findIndex(item => item.id === productId);

        let updatedItems;

        // Copy the existing items array
        updatedItems = [...items];

        // Update the quantity of the specific item
        updatedItems[existingItemIndex] = {
            ...updatedItems[existingItemIndex],
            quantity: newQuantity
        };
 
        // Update the state and the sessionStorage
        setItems(updatedItems);
        sessionStorage.setItem('cart', JSON.stringify(updatedItems));
    }
    


    
    // Variables
    const numItems = items.length;
    const subtotal = items.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0);
    const shipping = subtotal * .10;
    const total = subtotal + shipping;



    return (
        <CartContext.Provider
            value={{
                items,
                addItem,
                numItems,
                subtotal,
                shipping,
                total,
                removeItem,
                updateItemQuantity
            }}
        >
            {props.children}
        </CartContext.Provider>
    )
};

export default CartContext;