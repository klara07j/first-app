import React from "react";
import { Text, StyleSheet, View } from "react-native";
import StudentDetails from "../../components/StudentDetails";

const StudentScreen = () => {
    return( 
        <View>
            <Text styles={styles.text}>StudentScreen</Text>
            <StudentDetails
                name="Klara" 
                image={require("../assets/avatar1.jpeg")}
                description="Prvi student"
            />
            <StudentDetails 
                name="Janja"
                image={require("../assets/avatar2.jpeg")}
                description="Drugi student"
            />
            <StudentDetails 
                name="Eva"
                image={require("../assets/avatar3.jpeg")}
                description="Treći student" 
            />
            <StudentDetails 
                name="Marko"
                image={require("../assets/avatar4.jpeg")}
                description="Četvrti student" 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        textAlign: "center",
        fontSize: 20,
        marginVertical: 20,
        
    },
});

export default StudentScreen;