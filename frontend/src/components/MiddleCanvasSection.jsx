import { useCallback, useEffect } from 'react';
import {
  ReactFlow,
  MarkerType,
  Background,
  Controls,
  useNodesState,
  useEdgesState,
  addEdge,
  BackgroundVariant,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { addNode, selectAllNodes, updateNodesPosition } from "../reduxstore/nodesstore"
import { addEdge1, updateEdgesPosition, clearEdges } from "../reduxstore/edgesstore"
import { useDispatch, useSelector } from 'react-redux';
import { nodeTypes } from './nodetypes/nodeTypes';


const MiddleCanvasSection = () => {
  const dispatch = useDispatch();
  const initialNode = useSelector((store)=>store.nodesstore.nodes);
  const initialEdges = useSelector((store)=>store.edgesstore.edges);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNode);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  useEffect(() => {
  setNodes(initialNode);  
  }, [initialNode, setNodes]);

  useEffect(()=>{
    dispatch(updateEdgesPosition(edges))
  },[edges])

  const onConnect = useCallback(
    (connection) => {
      const edge = {
        ...connection,
        id: `${edges.length + 2}`,
      };
      setEdges((prevEdges) => addEdge(edge, prevEdges));
    },
    [edges]
  );

  const handleNodesChange = useCallback(
    (changes) => {
      onNodesChange(changes); 
      setNodes((nds) => {
        const updated = nds.map((node) => {
          const change = changes.find((c) => c.id === node.id && c.position);
          return change ? { ...node, position: change.position } : node;
        });
        dispatch(updateNodesPosition(updated));
        return updated;
      });
    },
    [onNodesChange, dispatch, setNodes]
  );

  return (
    <div className='h-[88%] sm:h-full bg-slate-700 w-full p-1 divide-x divide-solid divide-gray-600 sm:w-3/5'>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={handleNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes()}
        fitView
      >
        <Controls/>
        <Background color="yellow" variant={BackgroundVariant.Dots}/>
      </ReactFlow>
    </div>
  )
}

export default MiddleCanvasSection
