import React from "react";
import { Text, StyleSheet, View} from "react-native";

const ExerciseScreen = () => {
   //Deklaracija varijabli let,const

   let message1 = "Hi there!";
   let message2 = "Moja varijabla ima novu vrijednost!";

   return(
    <View style={StyleSheet.container}>
        <Text>{message1}</Text>
        <Text>{message2}</Text>
    </View>
   );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default ExerciseScreen;