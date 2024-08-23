import React from 'react'
import './placeOrder.css'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react'
import { FoodContext } from '../../Context/FoodContext'

const PlaceOrder = () => {
  const {getTotalCartAmount}=useContext(FoodContext);
  const navigate=useNavigate();
  return (
    <div className='placeorder'>
      <div className="placeorder-left">
      <h1>Delivery Information</h1>
      <div className="placeorder-inputs">
        <input type="text" name="" id="" placeholder='First name'/>
        <input type="text" placeholder='Last name'/>
      </div>

      <input type="email" placeholder='Email address'/>
      <input type="text" placeholder='Street'/>

      <div className="placeorder-inputs">
        <input type="text" name="" id="" placeholder='City'/>
        <input type="text" placeholder='State'/>
      </div>

      <div className="placeorder-inputs">
      <input type="text" placeholder='Zip'/>
      <input type="text" name="" id="" placeholder='Country'/>
      </div>
      <input type="text" name="" id="" placeholder='Phone'/>
    </div>

    <div className="placeorder-right">
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
    </div>
    </div>
  )
}

export default PlaceOrder
