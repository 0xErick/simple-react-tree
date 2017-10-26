import React from 'react';

let level = 0;
class Tree extends React.Component {

  constructor(props) {
    super(props);
  }

  loop(data, level2, index2) {
    console.log("level2", level2)
    level++

    if (level2 == level) {
      data.push({"key": `${level}-${Math.random()}`, "name": "未命名"})
    }

    let result = data.map((item, index) => {

      if (item.children && item.children.length) {
        this.loop(item.children, level2, index)
        return item
      }

      // if (level2 == level && level > 1) {
      //   console.log("index", index)
      //   console.log("item", item)
      //   // item.children.push({"key": `${level}-${Math.random()}`, "name": "未命名2"})
      //   return item;
      // }


      return item
    });
    level--;
    return result;

  };

  addTongji(level) {
    // let newTreeData = this.props.treeData.map((item) => {
    //
    // })

    console.log("level-waibu", level)
    this.props.update(this.loop(this.props.treeData, level, 1))
    console.log("add 同级")
  }

  addXiaji() {
    console.log("add 下一级")
  }

  del() {
    console.log("删除")
  }

  render() {

    const data = this.props.treeData

    console.log("原始data", data)


    const childrenWithProps = React.Children.map(this.props.children,
      (child) => React.cloneElement(child, {
        addTongji: (level) => this.addTongji(level),
        addXiaji: this.addXiaji,
        del: this.del

      }));

    return (
      <div style={{border: "5px solid blue", height: "auto", width: "600px"}}>
        {childrenWithProps}
      </div>
    );
  }
}

export default Tree;