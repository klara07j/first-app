import React from "react";
import { View, Text, StyleSheet, Button} from "react-native";

 const QuizScreen = () => {
    return(
        <View>
            <View styles={styles.container}>
                <Text fontSize="25">Kviz</Text>
                <Text fontSize="20">1. Pitanje</Text>
                <Text fontSize="15">Koliko ima kontinenata?</Text>
            </View>
            <View style={styles.container1}>
                <Button
                styles={styles.btn1}
                title = "5"
                onPress={() => console.log("Odgovor netočan")}
                ></Button>
                <Button
                styles={styles.btn2}
                title = "9"
                onPress={() => console.log("Odgovor netočan")}
                ></Button>
            </View>
            <View styles={styles.container2}>
                <Button
                styles={styles.btn3}
                title = "12"
                onPress={() => console.log("Odgovor netočan")}
                ></Button>
                <Button
                styles={styles.btn4}
                title = "7"
                onPress={() => console.log("Odgovor točan")}
                ></Button>
            </View>
        </View>
    );
 };

 const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
    },
    container1: {
        flexDirection: "horizontal",
        alignItems: "center",
    },
     container2: {
        flexDirection: "horizontal",
        alignItems: "center",
    },


 });

 export default QuizScreen;