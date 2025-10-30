import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity} from "react-native";
import data from "../data/countries (1).json";

class CountriesScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            countries: [],
        };
    }

    componentDidMount() {
        this.setState({
            countries: data,
        });
    }

    render() {
        return(
            <View>
                <Text style={styles.screenTitle}>Countries Screen</Text>
                <FlatList
                    data={this.state.countries}
                    keyExtractor={countries => countries.id}
                    renderItem={({item}) => (
                        <View style={styles.cardWrapper}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('CountryDetailsScreen', {item: item})}>
                                <Text>City name: {item.name}</Text>
                                <Text style={styles.countryStyle}>Country name: {item.country}</Text>
                                <Text>City description: {item.description}</Text>
                                <Text>Total population: {item.population}</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
cardWrapper: {
    backgroundColor: "#d3d3d3",
    marginBottom: 15,
},

countryStyle: {
    fontWeight: 15,
},

screenTitle: {
    fontSize: 20,
    textAlign: "center",
    marginVertical: 15,
    fontWeight: "bold",
},
});

export default CountriesScreen;



 