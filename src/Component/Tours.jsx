import React from 'react'
import Card from './Card'

const Tours = ({tours,removeTour}) => {
  return (
    <>
 
  <div className='container'>
  <div className='title-heading'>
   <h1 className='title' >Plan Your Destination</h1>
   </div>
   <div className='cards'>      
      {tours.map((tour)=>{
        return <Card {...tour} removeTour={removeTour} ></Card>;
      })}
   </div>
  </div>
    </>
  )
}

export default Tours
