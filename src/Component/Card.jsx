import React from 'react'
import { useState } from 'react';

const Card = ({id,name,img,info,price,removeTour}) => {
  const[readmore,setReadmore]=useState(false); 
  const description=readmore?info:`${info.substring(0,200)}....`;
  function readmoreHandler()
  {
    setReadmore(!readmore);
  }


  return (
    <>
    <div className='card'>
        <img className='image' src={img}></img>
      <div className='tour-info'>
        <div className='tour-details'>
        <h4 className='tour-price'>₹{price}</h4>
        <h3 className='tour-name'>{name}</h3>
        </div>
        <div className='description'>
            {description}
            <span className='readMore' onClick={readmoreHandler}>
                {readmore?`Show less`:`Read more`}
            </span>
        </div>
        
      </div> 
      <button className='btn-red' onClick={()=>removeTour(id)}>Not Interested</button> 
    </div>  
      
    </>
  )
}

export default Card
