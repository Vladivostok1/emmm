import React from 'react';
import './App.css';
// import { Button } from 'antd';
import { Menu} from 'antd';
import CommonHeader from './components/commonHeader'
import Nav from './components/Nav'
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
import First from "./pages/first"
import StudentAdd from './pages/StudentAdd'
import StudentSource from './pages/StudentSource'

const { SubMenu } = Menu;

function App() {
  return (
    <div className="App">
      <Router>
          <div className="app-left">
            <Nav></Nav>
        </div>
        <div className="app-right">
            <CommonHeader></CommonHeader>
            <Route path = '/home' component = {First}></Route>
            <Route path = "/admin/student/add" component  ={StudentAdd}></Route>
            <Route path = "/student" component  ={StudentSource}></Route>
        </div>
      </Router>
      
    </div>
  );
}

export default App;
