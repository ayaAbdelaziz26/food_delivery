import React, { useContext} from 'react'
import './foodItem.css'
import rating from '../../Assets/rating_starts.png'
import add_icon_white from '../../Assets/add_icon_white.png'
import add_icon_green from '../../Assets/add_icon_green.png'
import remove_icon from '../../Assets/remove_icon_red.png'
import { FoodContext } from '../../Context/FoodContext'



const FoodItem = ({id,name,price,description,image}) => {
  const {cartItems,addToCart,removeFromCart}=useContext(FoodContext);
  return (
    <div className='fooditem'>
        <div className="fooditem-image">
        <img src={image} alt="my image" />
        {!cartItems[id]?
        <img src={add_icon_white} onClick={()=>addToCart(id)} className='add_white'/>
        :<div className='fooditem-image-icons'>
          <img src={add_icon_green} alt="green icon" onClick={()=>addToCart(id)} className='add-green'/>
        <p>{cartItems[id]}</p>
        <img src={remove_icon} alt="remove icon" onClick={()=>removeFromCart(id)} className='remove-icon'/></div>}
        </div>
        
        <div className="fooditem-name-rate">
        <p>{name}</p>
        <img src={rating} alt="rating"/>
        </div>

        <div className="fooditem-description">
        <p>{description}</p>
        </div>
        
        <div className="fooditem-price">
        <p>{price}</p>
        </div>
    </div>
  )
}

export default FoodItem
