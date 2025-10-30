import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const Oneproduct = (props) => {
    return (
        <View style={styles.wrapper}>
            <Image source={{uri: produkt.image}} style={styles.img}></Image>
            <View style={styles.detalji}>
                <Text style={styles.ime}>{props.name}</Text>
                <Text style={styles.category}>{props.category}</Text>
                <Text style={styles.opis}>{props.description}</Text>
                <View style={styles.linija}>
                    <View style={styles.stocklinija}>
                        <Text style={styles.stockLabel}>Stock: </Text>
                        <Text style={styles.stock}>{props.stock}</Text>
                    </View>
                    <View style={{flex: 1}}></View>
                    <View style={styles.pricelinija}>
                        <Text style={styles.priceLabel}>Price: </Text>
                        <Text style={styles.price}>{props.price}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        width: 450,
        alignSelf: "center",
        marginVertical: 10,
        backgroundColor: "#ab9292ff",
        borderRadius: 6,
        borderWidth: 1,
        overflow: "hidden",
    },
    img: {
        widht: '100%',
        height: 160,
        resizeMode: "contain",
    },
    detalji: {
        padding: 10,
    },
    ime: {
        fontSize: 15,
        fontWeight: '500',
        marginBottom: 5,
    },
    category: {
        fontSize: 15,
        fontWeight: '500',
        marginBottom: 5,
        color: "#08022bff",
    },
    description: {
        fontSize: 15,
        marginBottom: 10,
    },
    linija: {
        flexDirection: "row",
        alignItems: "baseline",
        justifyContent: "space-between",
        paddingTop: 5,
        borderTopWidth: 1,
    },
    stocklinija: {
        flexDirection: "row",
    },
    pricelinija: {
        flexDirection: "row",
        alignItems: "baseline",
    },
    stockLabel: {
        fontSize: 15,
        color: "#08022bff",
    },
    stock: {
        fontSize: 18,
        fontWeight: "bold",
    },
    priceLabel: {
        fontSize: 15,
        color: "#08022bff",
    },
    price: {
        fontSize: 18,
        fontWeight: "bold",
    },
});

export default Oneproduct;