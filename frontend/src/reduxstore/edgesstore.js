import { createSlice } from '@reduxjs/toolkit'

const edgestore = createSlice({
  name: "edge",
  initialState: {
    edges: [],
    refresh: false
  },
  reducers: {
    addEdge1: (state, action) => {
      state.edges.push(action.payload)
    },
    updateEdgesPosition: (state, action) => {
      state.edges = action.payload; 
    },
    clearEdges: (state)=>{
      state.edges = []
    }
  }
})

export const { addEdge1, updateEdgesPosition, clearEdges } = edgestore.actions

export const selectAllEdges = (state) => state.node.edges;

export default edgestore.reducer
