//Importovanje bibloteka
import React from "react";
import { Text, StyleSheet, View } from "react-native";

//Kreiranje komponente
const MainScreen = () => {
    return (
        <View style={style.container}>
            <Text style={style.textStyle}>This is Main Screen</Text>
        </View>
    );
};

//Kreiranje stylesheet
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffff",
        alignItems: "center",
        justifyContent: "center",
    },
    textStyle:{
        fontSize: 30,
    }
});

//Eksportovanje komponente
export default MainScreen;