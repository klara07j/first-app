import React from "react";
import { Text, StyleSheet, View } from "react-native";


const StudentDetails = (props) => {
    return( 
        <View>
            <View styles={styles. cardWrapper}>
                <View>
                    <Image source={props.image} style={styles.img}></Image>
                </View>
                <View styles={styles.infoWrapper}>
                    <TouchableOpacity 
                        style= {styles.touchableBtn}
                        onPress={() => console.log(props.name)}>
                        <Text styles={styles.text}>{props.name}</Text>
                        <Text>{props.description}</Text>
                    </TouchableOpacity>
                </View>
            </View>
       </View>
    );
};

const styles = StyleSheet.create({
    cardWrapper: {
        flexDirection: "row",
        backgroundColor: "white",
        borderRadius: 8,
        width: "90%",
        alignSelf: "center",
        marginBottom: 15,
    },
    img: {
        width: 100,
        height: 100,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
    },

    infoWrapper: {
        marginLeft: 20,
        marginBottom: 20,
    },

    text: {
        textAlign: "center",
        fontSize: 20,
        marginVertical: 20,
        
    },

    touchableBtn: {
        backgroundColor: "white",
    }
});

export default StudentDetails;