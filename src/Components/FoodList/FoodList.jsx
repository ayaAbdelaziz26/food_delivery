import React from 'react'
import './foodList.css'
import { food_list } from '../../Assets/assets'
import FoodItem from '../FoodItem/FoodItem'

const FoodList = ({category}) => {
  return (
    <div className='foodlist'>
    <h1>Top dishes near you</h1>
    <div className="foodlist-list">
    {food_list.map((list)=>{
      if(category==="All" || category===list.category){
        return(
          <div key={list._id}>
            <FoodItem image={list.image} description={list.description} name={list.name} price={list.price +"$"} id={list._id}/>
            </div>
    )}})}
    </div>
    </div>
  )
}

export default FoodList
