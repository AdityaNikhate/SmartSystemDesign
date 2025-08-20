import React from 'react'

const ItemButtonComponent = ({name, message}) => {
  return (
    <div className='w-full py-1 px-2 text-wrap'>
      <button onClick={()=>{
        alert(message)
      }} className='w-full bg-gray-900 py-1 px-2 text-nowrap text-left text-gray-200 hover:text-gray-50 border-b rounded-b-lg hover:border-t border-gray-800 rounded-t-lg hover:border-slate-100 hover:shadow-md ' >{name}</button>
    </div>
  )
}

export default ItemButtonComponent
