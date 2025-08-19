import React from 'react'
import {ReactFlow, Background, BackgroundVariant, Controls} from "@xyflow/react"

const MiddleCanvasSection = () => {
  return (
    <div className='h-full bg-slate-700 w-3/5 p-1 divide-x divide-solid divide-gray-600'>
        <ReactFlow 
        fitView>
            <Controls/>
            <Background color="yellow" variant={BackgroundVariant.Dots}/>
        </ReactFlow>
    </div>
  )
}

export default MiddleCanvasSection
