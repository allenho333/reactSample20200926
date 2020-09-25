import React from 'react';
// import ReactDOM from 'react-dom';
import './index.scss';
import action from "../../store/action.js";
import { connect } from 'react-redux'
class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "homeComponent"
        }
    }
    render() {
        console.log("this.props",this.props)
        return (
            <div>
                {this.state.name}
                <br/>
              total: {this.props.total}
              <button onClick={()=>{
                  this.props.onAddClick()
              }}>add</button>
            </div>
        )
    }
}
// export default Home;

// 将state映射到props
function mapStateToProps(state) {
    console.log("state.num",state.num)
    console.log("state.total",state.total)
    return {
      value: state.num,
      total:state.total
    }
  }
  
  //将修改state数据的方法，映射到props,默认会传入 store里面的dispatch方法 
  function mapDispatchToProps(dispatch){
    return {
      onAddClick : ()=>{
        console.log("action.addActionAtHome",action.addAction)
        dispatch(action.addAction)},
      onDecrementClick : ()=>{
        console.log("action.decrementActionAtHome",action.decrementAction)
        dispatch(action.decrementAction)}
    }
  }
  
  //将上面二个方法，将数据仓库的state和修改state的方法，映射到组件上 
  export default connect(mapStateToProps,mapDispatchToProps)(Home)

