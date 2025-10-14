import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";

const Projects = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>PROJECTS</Text>
                <TouchableOpacity>
                    <Text style={styles.view}>View All</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.list}>
                <Image style={styles.image}
                
                />
                <Image style={styles.image}
                
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        width: '100%',
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
    },
    view: {
        color: "orange",
    },
    list: {
        flexDirection: "row",
        justifyContent: "center",
        paddingHorizontal: 10,
    },
    image: {
        width: 160,
        height: 100,
        borderRadius: 10,
    },
});

export default Projects;