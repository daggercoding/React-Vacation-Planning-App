import './App.css';
import data from "./data.js"
import Tours from './Component/Tours';
import { useState } from 'react';

function App() {
  const[tours,setTours]=useState(data);
  function removeTour(id)
  {
    const newTours= tours.filter(tour=>tour.id!==id)
    setTours(newTours);
  }
  if(tours.length===0)
  {
    return (
      <div className='reset'>
        <h1>--NO MORE TOURS LEFT--</h1>
        <button className='btn-white' onClick={()=>setTours(data)} >REFRESH</button>
      </div>
    )
  }
  return (
   <>
   <div className='App'>
  
    <Tours tours={tours} removeTour={removeTour}></Tours>
   </div>

   </>
  );
}

export default App;
