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
            <Button
                title="go to List Screen"
                onPress={() => props.navigation.navigate("Students")}
            />
             <Button
                title="go to Countries Screen"
                onPress={() => props.navigation.navigate("Countries")}
            />
        </View>
        // add another button in the Homescreen and add navigation from "menuScreen" to this new screen usin Button
        // add another button in the Homescreen that navigates back to the MenuScreen
        // create Profilescreen and add a TouchableOpacity in the Homescreen that navigates to "Profilescreen"
        //add a button in the Profilescreen that navigates back to the Homescreen
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