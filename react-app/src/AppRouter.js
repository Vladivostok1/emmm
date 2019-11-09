import React from 'react';
import './App.css';
import Header from "./components/header";
import Footer from './components/footer';
import Test from "./components/test";
import Test_2 from "./components/test_2";
import Start from "./components/start";
import Jump from "./components/Jump";
import {
  BrowserRouter as Router,
  Link,
  Route,
  // Switch
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <hr />
        <Link to="/">首页</Link> |
        <Link to="/a">aaa</Link> |
        <Link to="/b">bbb</Link> |
        <Link to="/c">ccc</Link> |
        <hr />
        <Jump to="/e">eeeee</Jump>
        <Jump to="/f">fffff</Jump>
        <Jump to="/g">ggggg</Jump>
        {/* <Link to="/children">fff</Link> */}
        {/* <Switch> */}
        <Route path="/a" component={Test}></Route>
        <Route path="/b" component={Test_2}></Route>
        <Route exact path="/" component={Start}></Route>
        <Route path="/c" render={() => {
          return <h2>ccccccccccccccccc</h2>
        }}></Route>
        {/* <Route to = "/e">ahahahfahfha</Route> */}
        {/* <Route exact path="/" component={Start}></Route> */}
        {/* <Route path="children" children={() => {
          return <span>></span>
        }}></Route> */}

        {/* </Switch> */}

        <hr />
        <h3>fhaskfhafa</h3>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
