import { createSlice } from '@reduxjs/toolkit'

const nodestore = createSlice({
  name: "node",
  initialState: {
    nodes: [],
    refresh: false
  },
  reducers: {
    addNode: (state, action) => {
      state.nodes.push(action.payload)
    },
    updateNodesPosition: (state, action) => {
      state.nodes = action.payload; 
    },
    clearNode: (state)=>{
      state.nodes = []
    }
  }
})

export const { addNode, updateNodesPosition, clearNode } = nodestore.actions

export const selectAllNodes = (state) => state.node.nodes

export default nodestore.reducer
