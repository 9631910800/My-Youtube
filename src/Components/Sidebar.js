import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
    const isMenuOpen=useSelector(store=>store.app.isMenuOpen);
    if(!isMenuOpen) return null;
  return (
    <div className='bg-slate-100 shadow-md m-1 w-32'>
       <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Live</li>
        <li>Games</li>
        <li className='font-bold'>Subscriptions</li>
        <li>Channel 1</li>
        <li>Channel 2</li>
       </ul>
      
    </div>
  )
}

export default Sidebar
