## Usage

### demo.js

```jsx
import React from 'react';
import {Tree, loop} from "simple-react-tree"

const div1 = (node)=>(<div style={{
                  					border:"1px red solid",
                      				width:"100px",
                        			height:"60px"}}>{node.name}</div>)
const div2 = (node)=>(<div style={{
                  					border:"1px green solid",
                      				width:"80px",
                        			height:"60px"}}>{node.name}</div>)

const div3 = (node)=>(<div style={{
                  					border:"1px blue solid",
                      				width:"60px",
                        			height:"60px"}}>{node.name}</div>)

export default class Demo extends React.Component{
  
    render(){
      return(
       <Tree>
          {loop(this.state.treeData,[div1,div2,div3])}
       </Tree>
       )
    }
}
```



#### index.js

```jsx
import React from "react";
import ReactDOM from "react-dom";
import Demo from './demo';

ReactDOM.render(
<Demo />,
  document.getElementById('root')
);

```



Then You Will See something  like bellow:





### treeData

```json
{
    "treeData": {
        "id": 1,
        "name": "资料",
        "slug": "information",
        "children": [
            {
                "id": 2,
                "name": "托福",
                "slug": "toefl",
                "children": [
                    {
                        "id": 5,
                        "name": "听力",
                        "slug": "listening",
                        "children": []
                    },
                    {
                        "id": 6,
                        "name": "阅读",
                        "slug": "reading",
                        "children": []
                    },
                    {
                        "id": 7,
                        "name": "写作",
                        "slug": "writing",
                        "children": []
                    },
                    {
                        "id": 8,
                        "name": "口语",
                        "slug": "speaking",
                        "children": []
                    }
                ]
            },
            {
                "id": 3,
                "name": "雅思",
                "slug": "ielts",
                "children": [
                    {
                        "id": 9,
                        "name": "听力",
                        "slug": "listening",
                        "children": []
                    },
                    {
                        "id": 10,
                        "name": "阅读",
                        "slug": "reading",
                        "children": []
                    },
                    {
                        "id": 11,
                        "name": "写作",
                        "slug": "writing",
                        "children": []
                    },
                    {
                        "id": 12,
                        "name": "口语",
                        "slug": "speaking",
                        "children": []
                    }
                ]
            } 
        ]
    }
}
```



