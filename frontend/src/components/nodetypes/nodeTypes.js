import { CustomNode } from "./CustomNode";
import {buttonAndFuntions} from '../../rules/items-and-function.js'

export const nodeTypes = ()=>{
  const nodeObject = {};
  const data = Object.entries(buttonAndFuntions);
  data.map(([key, value])=>{
    let o1 = {};
    o1[value.name] = CustomNode
    Object.assign(nodeObject, o1)
  });
  return nodeObject;
}
