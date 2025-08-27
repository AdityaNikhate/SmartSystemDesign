import { Handle, Position } from '@xyflow/react';

export function CustomNode({ data, type }) {
  const imgurl = `/icons/${type.toLowerCase()}.png`;
  return (
    <div className="bg-gray-700 shadow-md rounded-md border border-slate-300 w-16 h-14 overflow-hidden">
      <div className="flex justify-center items-center ">
        <img className="w-10 h-10 pt-1" src={imgurl} alt={type} />
      </div>
      <div className="text-center text-[8px] font-chela text-gray-100">
        {type}
      </div>
      <Handle type="source" position={Position.Top} id="top" className="!bg-blue-500 w-2 h-2" />
      <Handle type="source" position={Position.Right} id="right" className="!bg-blue-500 w-2 h-2" />
      <Handle type="source" position={Position.Bottom} id="bottom" className="!bg-blue-500 w-2 h-2" />
      <Handle type="source" position={Position.Left} id="left" className="!bg-blue-500 w-2 h-2" />

      <Handle type="target" position={Position.Top} id="top-target" className="!bg-green-500 w-2 h-2" />
      <Handle type="target" position={Position.Right} id="right-target" className="!bg-green-500 w-2 h-2" />
      <Handle type="target" position={Position.Bottom} id="bottom-target" className="!bg-green-500 w-2 h-2" />
      <Handle type="target" position={Position.Left} id="left-target" className="!bg-green-500 w-2 h-2" />
    </div>
  );
}
