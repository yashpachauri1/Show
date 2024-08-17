import React, { createContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (item) => {
        const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            setCartItems(cartItems.map(cartItem =>
                cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
            ));
        } else {
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
        }
    };

    const increaseQuantity = (id) => {
        setCartItems(cartItems.map(cartItem =>
            cartItem.id === id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        ));
    };

    const decreaseQuantity = (id) => {
        setCartItems(cartItems.map(cartItem =>
            cartItem.id === id && cartItem.quantity > 1 ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
        ));
    };

    const removeItem = (id) => {
        setCartItems(cartItems.filter(cartItem => cartItem.id !== id));
    };

    return (
        <CartContext.Provider value={{ cartItems, addItemToCart, increaseQuantity, decreaseQuantity, removeItem }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;
