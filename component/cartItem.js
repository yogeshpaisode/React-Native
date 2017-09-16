import React, { Component } from 'react';
import {Button, Text, View} from "react-native";

export default class CartItem extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <View>

                <Text>
                    {this.props.title}
                </Text>
                <Text>
                    {this.props.item.name}
                </Text>
                <Text>
                    {this.props.item.qty}
                </Text>

                <View>
                    <Button title="+1" onPress={this.incr.bind(this)}></Button>
                    <Button title="-1" onPress={this.decr.bind(this)}></Button>
                </View>

            </View>
        )
    }

    incr(){
        console.log("Increment..");
    }

    decr(){
        console.log("Decrement..");
    }

}

CartItem.defaultProps = {
    title: "Default Title.."
}