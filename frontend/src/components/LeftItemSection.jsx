import React from 'react'
import HeroName from './HeroName'
import ItemListLeftSection from './ItemListLeftSection'

const LeftItemSection = () => {
  return (
    <div className='h-full bg-slate-800 w-1/5 px-4 py-6'>
      <HeroName/>
      <ItemListLeftSection/>
    </div>
  )
}

export default LeftItemSection
