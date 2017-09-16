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

import Cart from "./component/cart";

export default class ReactSample extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Cart items={this.genrateItems()}/>
            </View>
        );
    }

    genrateItems(){
        let items = [];
        for (let i = 0; i < 20; i++) {
            items.push({
                id: i,
                title: "Phone details " + 1,
                name: "Phone " + i,
                price: 200 + i,
                qty : 1
            });
        }
        return items;
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
