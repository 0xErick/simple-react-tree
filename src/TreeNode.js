import React from 'react'

class TreeNode extends React.Component {

  constructor(props) {
    super(props);
    this.state = {state: 1}
  }

  zhankaiOrZhedie() {
    this.setState(prevState => ({
      state: prevState.state * -1
    }));
  }

  render() {
    console.log(this.props)

    const that = this
    const addTongji = (level) => that.props.addTongji(level)
    // const addTongji = (level) => console.log(level)


    return (
      <div style={style[this.props.level]}>
        {/* current layer  which can be custmize by user*/}
        <div style={style2[this.props.level]}>
          {/* left */}
          <div onClick={() => this.zhankaiOrZhedie()}>{this.state.state == 1 ? "-" : "+"}</div>
          {/* middle */}
          <div>{this.props.name}</div>
          {/* right */}
          <div style={{"width": "100px", "display": "flex", "fontSize": "16px", "justifyContent": "space-between"}}>
            <div onClick={() => {
              this.props.addTongji(this.props.level)
            }}>add1
            </div>
            <div onClick={() => {
              this.props.addXiaji()
            }}>add2
            </div>
            <div onClick={() => {
              this.props.del()
            }}>del
            </div>
          </div>
        </div>
        {/* sub layer */}
        {this.state.state == 1 && this.props.children && this.props.children.length ? React.Children.map(this.props.children,
            (child) =>

              <div>
                {      child && child != false && React.cloneElement(child,
                  {
                    addTongji: (level) => {
                      addTongji(level)
                    }
                  }
                )}


              </div>
          ) : ""}

      </div>
    );
  }
}

const style = {
  1: {"border": "3px solid black", "width": "400px", "marginBottom": "10px", "marginLeft": "30px"},
  2: {"border": "2px solid red", "width": "300px", "marginBottom": "5px", "marginLeft": "60px"},
}


const style2 = {
  1: {
    "backgroundColor": "#EDF6FD",
    "border": "1px solid #C7D0D3",
    "width": "380px",
    "marginBottom": "10px",
    "display": "flex",
    "justifyContent": "space-between"
  },
  2: {
    "backgroundColor": "#FFF4EC",
    "border": "1px solid #C7D0D3",
    "width": "280px",
    "marginBottom": "5px",
    "display": "flex",
    "justifyContent": "space-between"
  },
}

export default TreeNode;