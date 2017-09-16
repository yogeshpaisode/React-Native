import React, { Component } from 'react';
import {Button, Text, View} from "react-native";

export default class CartItem extends Component{

    constructor(props){
        super(props);

        this.state = {
            qty: props.item.qty
        };
    }

    render(){
        return (
            <View>
                <Text>
                    Title : {this.props.item.title}
                </Text>
                <Text>
                    Name : {this.props.item.name}
                </Text>
                <Text>
                   Quantity : {this.state.qty}
                </Text>
                <View>
                    <Button title="+1" onPress={this.incr.bind(this)}></Button>
                    <Button title="-1" onPress={this.decr.bind(this)}></Button>
                </View>
            </View>
        )
    }

    incr(){
        this.setState({
            qty: this.state.qty + 1
        });
    }

    decr(){
        this.setState({
            qty: this.state.qty - 1
        });
    }

}

CartItem.defaultProps = {
    title: "Default Title.."
}