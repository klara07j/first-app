import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity} from "react-native";

const MenuScreen = () =>  {
    console.log(props);
    return (
        <View>
            <Text style={styles.text}>Welcome to Menu Screen</Text>
            <Button
                title="go to List Screen"
                onPress={() => props.navigation.navigate("List")}
            />
            <TouchableOpacity 
                style= {styles.touchableBtn}
                onPress={() => props.navigation.navigate("Quiz")}>
                <Text>Go to Quiz Screen</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        textAlign: "center",
        fontSize: 20,
        marginVertical: 20,
    },
   touchableBtn: {
        backgroundColor: "pink",
        marginVertical: 15,
        padding: 20,
        borderRadius: 6,
   },
});

export default MenuScreen;