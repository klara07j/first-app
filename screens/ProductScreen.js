import React from "react";
import { Text, StyleSheet, View, FlatList, ScrollView } from "react-native";
import data from "../data/products.json";
import Product from "../components/Product";

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
                <Text style={styles.screenTitle}>Products Screen</Text>
                <FlatList
                     data={this.state.products}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) => (
                         <View>
                            <Product name={item.name} 
                            category={item.categoryt}
                            description={item.description}
                             stock={item.stock}
                            price={item.price}
                            img={item.image}
                             />
                        </View>
                    )}
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