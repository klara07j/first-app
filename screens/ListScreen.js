import React from "react"
import {Text, StyleSheet, Flatlist, View, Button} from "react-native"

const Students = [
    {name: "Klara", surname: "Jovanović", age: "18"},
    {name: "Ivo", surname: "Ivić", age: "28"},
    {name: "Ana", surname: "Filipović", age: "15"}
];

const Animals = [
    {type: "red", species: "panda"},
    {type: "white", species: "fox"},
    {type: "brown", species: "grizzli"}
];

const ListScreen = (props) => {
    return (
        <View>
            <Text>List Screen</Text>
            <Flatlist horizontal = {true}
            showsHorizontalScrollIndicator = {false}
            keyExtractor = {(student) => student.surname}
            data = {Students}
            renderItem = {({item}) => {
                return( <Text style={styles.studentWrapper}>{item.name}-{item.surname}-{item.age}</Text>);

            }} />
            <Text>Animal List</Text>
            <Flatlist
            horizontal = {false}
            data = {Animals}
            renderItem = {({item}) => {
                return( <Text style={styles.animalWrapper}>{item.type}-{item.species}</Text>);
            }}
            />
            <Button
                title="Go back"
                onPress={() => props.navigation.goBack()}
            />
        </View>
    );
};

const styles = StyleSheet.create ({

});

export default ListScreen;