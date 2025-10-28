import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity} from "react-native";

const CountryDetails = (props) => {
    const {item} = props.params;
    return(
        <View style={styles.cardWrapper}>
                <Text>City name: {item.name}</Text>
                <Text style={styles.countryStyle}>Country name: {item.country}</Text>
                <Text>City description: {item.description}</Text>
                <Text>Total population: {item.population}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
cardWrapper: {
    backgroundColor: "#d3d3d3",
    marginBottom: 15,
},
});

export default CountryDetails;