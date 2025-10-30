import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";
import data from "../data/products.json";
import component from "../components/Product";
import { StatusBar } from "expo-status-bar";

class ProductScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [],
        };
    }

    componentDidMount() {
        this.setState({
            products: data,
        });
    }

    render() {
        return(
            <View style={styles.glavni}>
                <StatusBar barStyle="dark-content" backgroundColor="#fff"/>
                <Text style={styles.screenTitle}>Products Screen</Text>
                <FlatList
                    data={this.state.products}
                    keyExtractor={item => item.id}
                    renderItem={this.rendercomponent}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    glavni: {
        flex: 1,
        backgroundColor: "white",
    },
    screenTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
        padding: 15,
    },
});

export default ProductScreen;