import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className="flex justify-spacearound">
        <Sidebar/>
        <Outlet/>
    </div>
  )
}

export default Body
