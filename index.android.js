/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View
} from 'react-native';
import CartItem from "./component/cartItem";

export default class ReactSample extends Component {
    render() {
        return (
            <View style={styles.container}>
                <CartItem item={{id: 1, name: "phone 1", qty:5}} title={"Cart Item..... >"}></CartItem>

                <CartItem item={{id: 2, name: "phone 2", qty:3}}></CartItem>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

AppRegistry.registerComponent('ReactSample', () => ReactSample);
