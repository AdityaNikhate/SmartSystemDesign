import React from 'react'
import { useDispatch } from 'react-redux'
import {clearNode} from '../reduxstore/nodesstore'
import {clearEdges} from "../reduxstore/edgesstore"

const ClearCanvasButton = () => {
    const dispatch = useDispatch();
  return (
    <div className='w-[20%] sm:w-full sm:mt-2 py-1 px-2 text-wrap'>
      <button onClick={()=>{
        dispatch(clearNode());
        dispatch(clearEdges())
      }} className='w-full h-10 sm:h-auto bg-green-400 py-1 px-2 text-nowrap font-bold text-gray-800  border-b rounded-b-lg hover:border-t border-gray-800 rounded-t-lg text-center hover:border-red-600 hover:shadow-md ' >
        <p className='hidden sm:block'>Clear Canvas</p>
        <img className='w-full  sm:hidden' src='/icons/clear.png' alt='clear button'/>
        </button>
    </div>
  )
}

export default ClearCanvasButton
