import React from 'react'
import HeroName from './HeroName'
import ItemListLeftSection from './ItemListLeftSection'
import ClearCanvasButton from './ClearCanvasButton'

const LeftItemSection = () => {
  return (
    <div className='sm:h-full bg-slate-800 flex h-[10%] overflow-hidden sm:block a sm:w-1/5 px-4 py-6'>
      <HeroName/>
      <ClearCanvasButton/>
      <ItemListLeftSection/>
    </div>
  )
}

export default LeftItemSection
