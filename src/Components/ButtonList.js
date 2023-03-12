import React from 'react'
import Button from './Button'

const List=["ALL","Cricket","Games","Cooking","Live","Movies","Songs","Stand-Up"]

const ButtonList = () => {
  return (
    <div className='flex'>
       { List.map(item => <Button  key={List.indexOf(item)}  name={item} />)}
    </div>
  )
}

export default ButtonList
