import React, { Component } from 'react';
import {
    Link,
    Route
  } from "react-router-dom";
class Jump extends Component {
    render() {
        return (
           <Route path = {this.props.to} children = {({match})=>{
               return (
                   <div>
                       {match?">":""}
                       <Link to = {this.props.to}>{this.props.children}></Link>
                   </div>
               )
           }}></Route>
            
        );
    }
}

export default Jump;