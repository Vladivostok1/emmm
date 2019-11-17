import React, { Component } from 'react';
import { Table, Divider, Tag } from 'antd';
import axios from 'axios';
import Mock from '../mock/Mock'

const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
  ];
class StudentSource extends Component {
    constructor() {
        super();
        this.state = {
            list:[]
        }
    }
    componentWillMount(){
        axios.get('https://2333.com/Student').then((res)=>{
            console.log(res)
            this.setState({
                list:res.data.list
            });
            console.log(this.state.list)
        })
    }
    render() {
        return (
            <div>
                <Table dataSource={this.state.list} columns={columns} />;
            </div>
        );
    }
}

export default StudentSource;