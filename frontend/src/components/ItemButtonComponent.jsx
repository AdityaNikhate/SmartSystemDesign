import React from 'react'
import { useDispatch } from 'react-redux'
import {addNode} from '../reduxstore/nodesstore'
import { v4 as uuidv4 } from 'uuid';

const ItemButtonComponent = ({name}) => {
  const dispatcher  = useDispatch();
  const imgurl = `/icons/${name.toLowerCase()}.png`
  return (
    <div className='w-full py-1 px-2 text-wrap'>
      <button onClick={()=>{
        dispatcher(addNode({
                    id: uuidv4(),
                    type: name,
                    data: { label: `Node ${uuidv4()}`  },
                    position: { x: 0, y: 0 },
                  }));
      }} className='h-full w-9 sm:w-full bg-gray-900 py-1 px-2 text-nowrap text-left text-gray-200 hover:text-gray-50 border-b rounded-b-lg hover:border-t border-gray-800 rounded-t-lg hover:border-slate-100 hover:shadow-md ' >
        <p className='hidden sm:block'>{name}</p>
        <img className='w-full  sm:hidden' src={imgurl} alt={name}/>
      </button>
    </div>
  )
}

export default ItemButtonComponent
