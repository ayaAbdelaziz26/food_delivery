import React, { useContext } from 'react'
import { FoodContext } from '../../Context/FoodContext'
import { food_list } from '../../Assets/assets';
import './cart.css'
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const {cartItems,addToCart,removeFromCart,getTotalCartAmount}=useContext(FoodContext);
    const navigate=useNavigate();
  return (
    <div className='cart'>
        <div className="cart-titles">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr/>
            {food_list.map((item)=>{
                if(cartItems[item._id]>0){
                    return(
                        <div>
                        <div className='cart-info cart-titles'>
                        <img src={item.image} alt="order" />
                        <p>{item.name}</p>
                        <p>{item.price}$</p>
                        <p>{cartItems[item._id]}</p>
                        <p>{cartItems[item._id]*item.price}$</p>
                        <p className='cancel' onClick={()=>{removeFromCart(item._id)}}>x</p>
                        </div>
                        <hr />
                        </div>
                    )
                }
                <hr/>
            })}

            <div className="cart-totals">
                <div className="cart-totals-left">
                    <h1>Cart Totals</h1>
                    <div className="cart-totals-left-item">
                        <p>Subtotal</p>
                        <p>{getTotalCartAmount()}$</p>
                    </div>
                    <hr />

                    <div className="cart-totals-left-item">
                        <p>Delivery fee</p>
                        <p>2$</p>
                    </div>
                    <hr />
                    
                    <div className="cart-totals-left-item total">
                        <p>Total</p>
                        <p>{getTotalCartAmount()+2}$</p>
                    </div>

                    <button onClick={()=>navigate('/order')}>proceed to checkout</button>
                </div>

                <div className="cart-totals-right">
                    <div>
                    <p>if you have a promocode enter it here</p>
                    <div className="cart-totals-right-inputs">
                        <input type="text" name="" id="" placeholder='promcode'/>
                        <button>Submit</button>
                    </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Cart
