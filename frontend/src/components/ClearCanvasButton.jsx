import React from 'react'
import { useDispatch } from 'react-redux'
import {clearNode} from '../reduxstore/nodesstore'

const ClearCanvasButton = () => {
    const dispatch = useDispatch();
  return (
    <div className='w-full mt-2 py-1 px-2 text-wrap'>
      <button onClick={()=>{
        dispatch(clearNode());
      }} className='w-full bg-green-400 py-1 px-2 text-nowrap font-bold text-gray-800  border-b rounded-b-lg hover:border-t border-gray-800 rounded-t-lg text-center hover:border-red-600 hover:shadow-md ' >Clear Canvas</button>
    </div>
  )
}

export default ClearCanvasButton
