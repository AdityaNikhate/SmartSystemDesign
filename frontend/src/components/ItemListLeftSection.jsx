import React from 'react'
import ItemButtonComponent from './ItemButtonComponent'
import {buttonAndFuntions} from '../rules/items-and-function.js'

const ItemListLeftSection = () => {

    const buttonArray = Object.entries(buttonAndFuntions);

  return (
    <div className='w-full px-1 h-[90%] overflow-auto scrollbar-hide'>
        {buttonArray.map(([key, item]) => (
        <ItemButtonComponent 
          key={key} 
          name={item.name} 
        />
      ))}
    </div>
  )
}

export default ItemListLeftSection
