import React from "react";
import { Text, StyleSheet, View } from "react-native";

BoxAdvanced = () => {
    return(
        <View style={styles.wrapper}>
            <View style={styles.box1}></View>;
            <View style={styles.box2}></View>;
            <View style={styles.box3}></View>;
        </View>
    );
};

style = StyleSheet.create({
    wrapper: {
        flexDirection: "column",
    },
    box1: {
        backgroundColor: "#b3227cff",
        height: 100,
        alignSelf: "flex-start"
    },
    box2: {
        backgroundColor: "#230739ff",
        height: 100,
        alignSelf: "center",
    },
    box3: {
        backgroundColor: "#0e925dff",
        height: 100,
        alignSelf: "flex-end",
    },
});

export default BoxAdvanced;