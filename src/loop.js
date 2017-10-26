import React from 'react'
import TreeNode from "./TreeNode"

let level = 0;
const loop = (data,divArray) => {
    level++
    let result = data.map((item,index) => {
      if (item.children && item.children.length) {
        let temp_level = level
        return <TreeNode key={item.id?item.id:item.key} name={item.name} level={temp_level}> {loop(item.children)}</TreeNode>;
      }

      let temp_level2 = level
      return <TreeNode key={item.id?item.id:item.key}  name={item.name} level={temp_level2}/>
    });
    level--
    return result;
 
  };

export default loop
