import React, { Component } from 'react';
import store from './store';
import {Add,Reduce} from "./action";
import {connect} from "react-redux";
class App extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.num}</h1>
                <button onClick = {()=>{
                    store.dispatch(Add(2));
                }}>click++</button>
                <button onClick = {()=>{
                    store.dispatch(Reduce());
                }}>click--</button>
            </div>
        );
    }
}
let mapStateToProps = (state)=>{
    return{
        num:state.num
    }
}
export default connect(mapStateToProps)(App);