import React from "react";
import store from "../redux";
import {SET_CHILDREN_DATA} from "../redux/action";

export default class Children extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            data:'子元素数据'
        }

    }

    onClick(){
        let {data} = this.state
        store.dispatch(SET_CHILDREN_DATA(data))
        console.log(store.getState().data)
        this.setState({})
    }

    render(){
        let {data} = this.state
        return(
            <div onClick={this.onClick.bind(this)}>{store.getState().data}</div>
        )
    }
}