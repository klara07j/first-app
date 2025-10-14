import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";

const ProfileInfo = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{props.name}</Text>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.desc}>
               {props.description}
            </Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttontxt}>{props.button}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create ({
    container: {
        alignItems: "center",
        marginBottom: 30,
    },

    name: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    title: {
        fontSize: 16,
        marginVertical: 4,
    },

    desc: {
        textAlign: "center",
        marginVertical: 15,
        paddingHorizontal: 15,
    },

    button: {
        backgroundColor: "orange",
        borderRadius: 15,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginTop: 10,
    },

    buttontxt: {
        color: "white",
        fontWeight: "bold",
    },
});

export default ProfileInfo;