import React, { useContext, useState } from 'react';
import cartImage from '../../assets/images/illustration-empty-cart.svg';
import './cart.css';
import CartContext from '../../store/CartContext';
import ConfirmationModal from '../confirm/ConfirmationModal';

const Cart = () => {
    const { cartItems, increaseQuantity, decreaseQuantity, removeItem } = useContext(CartContext);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleConfirmOrder = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="cart-container">
            <div className="cart-heading">
                <h1>Your Cart ({cartItems.length})</h1>
            </div>
            {cartItems.length === 0 ? (
                <div className="cart-empty">
                    <img src={cartImage} alt="Empty Cart" />
                    <p>Your added items will appear here</p>
                </div>
            ) : (
                <>
                    <ul className="cart-items">
                        {cartItems.map(cartItem => (
                            <li key={cartItem.id} className="cart-item">
                                <span>{cartItem.name}</span>
                                <div className="cart-item-actions">
                                    <button onClick={() => decreaseQuantity(cartItem.id)}>-</button>
                                    <span>{cartItem.quantity}</span>
                                    <button onClick={() => increaseQuantity(cartItem.id)}>+</button>
                                    <button onClick={() => removeItem(cartItem.id)}>Remove</button>
                                </div>
                                <span className="cart-item-price">
                                    ${cartItem.price.toFixed(2)}
                                </span>
                            </li>
                        ))}
                    </ul>
                    <div className="cart-summary">
                        <p className='total'><p>Order Total: </p> <span>${totalAmount.toFixed(2)}</span></p>
                        <button className="confirm-order-button" onClick={handleConfirmOrder}>
                            Confirm Order
                        </button>
                    </div>
                </>
            )}
            {isModalOpen && <ConfirmationModal onClose={closeModal} />}
        </div>
    );
};

export default Cart;
