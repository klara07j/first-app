import React from "react";
import { Text, StyleSheet, View } from "react-native";

BoxChallenge = () => {
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
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    box1: {
        backgroundColor: "#4d0833ff",
    },
    box2: {
        backgroundColor: "#993ce4ff",
        alignSelf: "center",
    },
    box3: {
        backgroundColor: "#75d6afff",
    },
});

export default BoxChallenge;