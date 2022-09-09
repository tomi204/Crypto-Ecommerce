import React from 'react'
import Cart from './Cart';
//import { CartContext } from './CartContext'
const cartItem = () => {
    const { blogs, setBlogs, addToCart, decreaseQty, deleteQty, cartItem, setCartItem } = useContext(DataContext);
    // render cart items
    return (
        <>
            {
                cartItem.map((item) => {
                    return (
                        <div className='cart-item'>
                            <img src={item.cover} alt="" />
                            <div>
                                <h2>{item.title}</h2>
                                <h4>${item.price}</h4>
                                <h4>Cantidad{value.quantity}</h4>
                                <p>Subtotal: ${item.quantity * item.price}</p>
                                <button onClick={() => removeFromCart(item.id)}>Eliminar Producto</button>
                            </div>
                        </div>
                    )
                })
            }</>)
}

export default cartItem;