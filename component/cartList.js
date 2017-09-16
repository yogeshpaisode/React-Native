import React, { Component } from 'react';
import {FlatList, View} from "react-native";
import CartItem from "./cartItem";

export default class CartList extends Component{

    constructor(props){
        super(props);
        this.state = {
            items: this.props.items
        }
    }

    render(){
        return (
            <View>
                <FlatList data={this.state.items} renderItem={this._renderItem} keyExtractor={this._keyExtractor}/>
            </View>
        )
    }

    componentWillMount(){

    }

    componentDidMount(){

    }

    componentWillUnmount(){

    }

    componentWillReceiveProps(nextProps){
        console.log("componentWillReceiveProps :: Next Props :: ",nextProps);
    }

    //Return true to reRender
    //Return false shall not reRender
    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate :: Next Props :: ",nextProps);
        return true;
    }



    _renderItem({item}){
        return (
            <CartItem item={item}/>
        )
    }

    _keyExtractor(item, index){
        return item.id;
    }
}