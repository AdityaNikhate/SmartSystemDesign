import React from 'react'
import { BsFillDiagram3Fill } from "react-icons/bs";
import { BsDiagram3 } from "react-icons/bs";

const HeroName = () => {
  return (
    <div className='w-full h-12 bg-slate-600 flex justify-around items-center border border-slate-100 rounded-tl-lg rounded-br-lg shadow-md' style={{boxShadow: '0 4px 6px -1px rgba(226, 232, 240, 0.5)'}}>
      <BsDiagram3 className='text-3xl text-slate-50'/>
      <h1 className='text-xl text-slate-50 font-chela tracking-widest'>Smart System Design</h1>
    </div>
  )
}

export default HeroName
