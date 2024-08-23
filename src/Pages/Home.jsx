import React, { useState } from 'react'
import Main from '../Components/Main/Main'
import ExploreMenue from '../Components/ExploreMenue/ExploreMenue'
import FoodList from '../Components/FoodList/FoodList'

const Home = () => {
  const [category,setCategory]=useState("All");
  return (
    <div>
      <Main/>
      <ExploreMenue category={category} setCategory={setCategory}/>
      <FoodList category={category}/>
    </div>
  )
}
export default Home