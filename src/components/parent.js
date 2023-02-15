import React from "react";
import store from "../redux";
import {SET_PARENT_DATA} from "../redux/action";

export default class Parent extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            data:'父元素数据'
        }

    }

    onClick(){
        let {data} = this.state
        store.dispatch(SET_PARENT_DATA(data))
        console.log(store.getState().data)
        this.setState({})
    }

    render(){
        let{data}=this.state
        return(
            <div onClick={this.onClick.bind(this)}>{store.getState().data}</div>
        )
    }
}