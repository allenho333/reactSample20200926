import React, { 
  Suspense, 
  // lazy 
} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import store from '../../store/store.js'
import './index.scss';
import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import Home from "../home";
import User from "../user";
import Upload from "../upload";
import About from "../about";
import { connect } from 'react-redux'
import action from "../../store/action.js";
//import  {addAction,decrementAction} from "../../store/action.js";
const { Header, Content, Footer, Sider } = Layout;

class App extends React.Component{
  constructor() {
    super()
    this.state = {

    }
  }
  render(){
    // console.log("state",store.getState())
    const onAddClick = this.props.onAddClick
    const onDecrementClick = this.props.onDecrementClick
    console.log("this.props", this.props)
    return (
      <div className="App">
        <Router basename="/">
          <Layout
            style={{ height: "100vh" }}
          >
            <Sider
              breakpoint="xs"
              collapsedWidth="0"
              onBreakpoint={broken => {
                console.log(broken);
              }}
              onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
              }}
              style={{ display: "inline-block", verticalAlign: "top", height: "" }}
            >
              <div className="logo">logo</div>
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" icon={<UserOutlined />}>
                  <Link to="/"> 
                  home
                  </Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                  <Link to="/user"> 
                  user
                  </Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<UploadOutlined />}>
                  <Link to="/upload"> 
                  upload
                  </Link>
                </Menu.Item>
                <Menu.Item key="4" icon={<UserOutlined />}>
                  <Link to="/about"> 
                  about
                  </Link>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout
  
              style={{ display: "inline-block", verticalAlign: "top", height: "100vh", position: "relative" }}
            >
              <Header className="site-layout-sub-header-background"
                style={{ margin: '24px 16px 0', padding: 0, height: "10vh" }}>this is header
                value:{this.props.value}
                total:{this.props.total}
                <button onClick={onAddClick}>add</button>
        <button onClick={onDecrementClick}>minus</button>
                </Header>
              <Content style={{ margin: '24px 16px 0', height: "80vh" }}>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 360, height: "100%" }}>
                  <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                      <Route path="/" exact component={Home}>
                        {/* home */}
                        </Route>
                      <Route exact  path="/user"
                      component={User}
                      ></Route>
                      <Route exact path="/upload"
                      component={Upload}></Route>
                      <Route exact path="/about"
                      component={About}></Route>
                    </Switch>
                  </Suspense>
                </div>
              </Content>
              <Footer style={{ textAlign: 'center', position: "absolute", bottom: "0px", width: "100%", height: "10vh" }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
          </Layout>
        </Router>
      </div>
    );
  }
}

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
      console.log("action.addAction",action.addAction)
      dispatch(action.addAction)},
    onDecrementClick : ()=>{
      console.log("action.decrementAction",action.decrementAction)
      dispatch(action.decrementAction)}
  }
}

//将上面二个方法，将数据仓库的state和修改state的方法，映射到组件上 
const App1 = connect(mapStateToProps,mapDispatchToProps)(App)


export default App1;
