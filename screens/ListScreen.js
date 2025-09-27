import React from "react"
import {Text, StyleSheet, Flatlist, View} from "react-native"

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

const ListScreen = () => {
    return (
        <View>
            <Text>List Screen</Text>
            <Flatlist horizontal = {true}
            showsHorizontalScrollIndicator = {false}
            keyExtractor = {student => student.surname}
            data = {Students}
            renderItem = {({item}) => {
                return <Text style={styles.studentWrapper}>{item.name}-{item.surname}-{item.age}</Text>

            }} />
            <Text>Animal List</Text>
            <Flatlist
            vertical = {true}
            data = {Animals}
            renderItem = {({item}) => {
                return <Text style={styles.animalWrapper}>{item.type}-{item.species}</Text>
            }}
            />
        </View>
    )
}

const style = StyleSheet.create ({

})

export default ListScreen;