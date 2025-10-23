import React from "react";
import { View, Text, StyleSheet, FlatList} from "react-native";

class Api extends React.Component {
    constructor() {
        super();
        this.state= {
            users: [],
        };
    }

    async componentDidMount() {
        const data = await fetch ("https://jsonplaceholder.typicode.com/users");
        const json = await data.json();
        this.setState=({
            users: json,
        });
    }

    render() {
        const{users} = this.state;
        return(
            <View style={styles.container}>
                <Text style={styles.header}>Users List</Text>
                <FlatList
                    keyExtractor={(item) => item.id.toString()}
                    data = {users}
                    renderItem={({item}) => (
                        <View style={styles.card}>
                            <Text style={styles.label}>Name: </Text>
                            <Text style={styles.value}>{item.name}</Text>

                            <Text style={styles.label}>Username: </Text>
                            <Text style={styles.value}>{item.username}</Text>

                            <Text style={styles.label}>Email: </Text>
                            <Text style={styles.value}>{item.email}</Text>

                            <Text style={styles.label}>Adress: </Text>
                            <Text style={styles.value}>{item.adress.street}, {item.adress.suite}, {item.adress.city}, {item.adress.zipcode}</Text>

                            <Text style={styles.label}>Geo: </Text>
                            <Text style={styles.value}>lat: {item.adress.geo.lat}, lng: {item.adress.geo.lng}</Text>

                            <Text style={styles.label}>Phone: : </Text>
                            <Text style={styles.value}>{item.phone}</Text>

                            <Text style={styles.label}>Website: </Text>
                            <Text style={styles.value}>{item.website}</Text>

                            <Text style={styles.label}>Company: </Text>
                            <Text style={styles.value}>{item.company.name}
                                <Text style={styles.sublabel}>Catch Phrase: </Text>{item.company.catchPhrase}
                                <Text style={styles.sublabel}>BS: </Text>{item.company.bs}
                            </Text>
                        </View>
                    )}
                />
            </View>
        );
    }
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        padding: 15,
    },
    header: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#084168ff",
        textAlign: "center",
        marginBottom: 15,
    },
    card: {
        backgroundColor: "#ce52f8ff",
        borderRadius: 12,
        padding: 15,
        marginBottom: 12,
        elevation: 3,
    },
    label: {
        fontWeight: "bold",
        color: "#322929ff",
    },
    sublabel: {
        fontWeight: "500",
        color: "#bcc4c9ff",
    },
    value: {
        fontSize: 16,
        color: "#597ebeff",
        marginBottom: 4,
    },
});

export default Api;