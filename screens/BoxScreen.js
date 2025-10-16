import React from "react";
import { Text, StyleSheet, View } from "react-native";

const BoxScreen = () => {
    return(
        <View  style={styles.wrapper}>
            <View style={styles.box1}></View>;
            <View style={styles.box2}></View>;
            <View style={styles.box3}></View>;
            <View style={styles.box4}></View>;
            <View style={styles.box5}></View>;
            <View style={styles.box6}></View>;
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "flex-end",
        alignItems: "strech",
        alignContent: "center",
    },
    box1: {
        width: 100,
        height: 100,
        backgroundColor: "red",
    },
     box2: {
        width: 100,
        height: 100,
        backgroundColor: "purple",
    },
     box3: {
        width: 100,
        height: 100,
        backgroundColor: "pink",
    },
    box4: {
        width: 100,
        height: 100,
        backgroundColor: "blue",
    },
     box5: {
        width: 100,
        height: 100,
        backgroundColor: "orange",
    },
     box6: {
        width: 100,
        height: 100,
        backgroundColor: "brown",
    },
});

export default BoxScreen;