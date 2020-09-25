const reducer = (state,action)=>{
    console.log("action",action)
    switch (action.type) {
      case "add":
          console.log("add")
        state.num++;
        state.total++;
        // state = Object.assign({},state)
        break;
      case "decrement":
        console.log("decrement")
        state.num--;
        state.total--;
        // state = Object.assign({},state)
        break;
      default:
        break;
    }
    console.log("state",state)
    return { ...state } //相当于对象的copy  进行一层的深拷贝 最好这么些，这样的话dispatch的时候就不需要再进行state的拷贝
  }

  export default reducer