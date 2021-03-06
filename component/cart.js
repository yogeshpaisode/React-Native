import React, { Component } from 'react';
import {Button, Text, View} from "react-native";
import CartList from "./cartList";

export default class Cart extends Component{

    constructor(props){
        super(props);

        this.state = {
            items: this.props.items
        }
    }

    render(){
        return (
            <View>
                <Text>From Cart..</Text>

                <Button title="Refresh" onPress={this.refresh.bind(this)}></Button>

                <CartList items={this.state.items}/>
            </View>
        )
    }

    refresh(){
        this.setState({
            toggle: true
        })
    }
}