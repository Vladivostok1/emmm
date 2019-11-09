import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
class header extends Component {
    
    render() {
        return (
            <div>
                <button onClick = {()=>{
                    this.props.history.go(-1);
                }}>&lt;</button>
                hahhahahahahhaha
            </div>
        );
    }
}

export default withRouter(header);