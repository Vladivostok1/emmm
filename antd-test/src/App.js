import React from 'react';
import './App.css';
// import { Button } from 'antd';
import { Menu} from 'antd';
import CommonHeader from './components/commonHeader'
import Nav from './components/Nav'
const { SubMenu } = Menu;

function App() {
  return (
    <div className="App">
        <div className="app-left">
            <Nav></Nav>
        </div>
        <div className="app-right">
            <CommonHeader></CommonHeader>
        </div>
    </div>
  );
}

export default App;
