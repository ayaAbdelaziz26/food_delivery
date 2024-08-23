import React, { useState } from 'react'
import './exploreMenue.css'
import { menu_list } from '../../Assets/assets'

const ExploreMenue = ({category,setCategory}) => {
  return (
    <div className='exploreMenue'>
        <div className="exploreMenue-header">
        <h1>Explore our menue</h1>
        </div>

        <div className="exploreMenue-details">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae accusamus officia blanditiis laboriosam saepe corrupti, laborum adipisci, suscipit labore illo nesciunt veniam repudiandae nobis eos, mollitia necessitatibus. Possimus, asperiores nostrum.</p>
        </div>
            <div className="exploreMenue-menue">
                {menu_list.map((item)=>{
                    return <div className="exploreMenue-menue-item" onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}>
                        <img src={item.menu_image} alt="menue image" className={category===item.menu_name?"active":""}/>
                        <p>{item.menu_name}</p>
                    </div>
                })}
            </div>
            <hr/>
    </div>
  )
}

export default ExploreMenue
