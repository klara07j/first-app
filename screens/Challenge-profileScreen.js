import React from "react";
import { View, StyleSheet, Image} from "react-native";
import ProfileInfo from "../components/ProfileInfo";
import Projects from "../components/Projects";


const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require("../assets/avatar1.webp")}
                style={styles.avatar}
            />
            <ProfileInfo
                name="JHON DOE"
                title="UI/UX Designer"
                description="We're passionate about creating beautiful desings"
                button="HIRE HIM"
            />
            <Projects/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#b5a2a2ff'
    },
    
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 50,
        marginBottom: 20,
        marginTop: 25,
    },
});

export default ProfileScreen;