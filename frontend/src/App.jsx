import { useState } from 'react'
import '@xyflow/react/dist/style.css';
import LeftItemSection from './components/LeftItemSection';
import MiddleCanvasSection from './components/MiddleCanvasSection';
import RightItemSection from './components/RightItemSection';

function App() {

  return (
    <>
      <div className='w-screen h-screen bg-gray-700 sm:flex'>
        <LeftItemSection />
        <MiddleCanvasSection />
        <RightItemSection />
      </div>
    </>
  )
}

export default App
