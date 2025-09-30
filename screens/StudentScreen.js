import React from "react"
import {Text, StyleSheet, FlatList, View} from "react-native"

const naslov = {
    naslov: "Personal info"
};

const infoStudent =  {
    opis: "Prezime i ime: ",
    surname: "Perić Emili"
};

const Studentdate = {
    opis: "Datum rođenja: ",
    date: "23.03.2003"
};

const Studentindex =  {
    opis: "Index",
    nmb: "3265"

};

const Ocjene = [
    {predmet: "Psihologija", ocjena: "5"},
    {predmet: "Socijalni Rad", ocjena: "4"},
    {predmet: "Logika", ocjena: "3"},
    {predmet: "Socijologija", ocjena: "4"}
];

const Hobi = [
    Trčanje, Tenis, Šoping, Planinarenje
];

const StudentScreen = () => {
    return(
        <View>
            <Text>{naslov}</Text>
            <Text>{infoStudent}</Text>
            <Text>{Studentdate}</Text>
            <Text>{Studentindex}</Text>
            <Text>Ocjene:</Text>
            <FlatList 
            data = {Ocjene}
            renderItem = {({item}) => {
                return(
                    <Text style={styles.ocjeneWrapper}>{item.predmet}: {item.ocjena}</Text>
                );
            }}/>
            
        </View>
    )
};

const styles = StyleSheet.create({});

export default StudentScreen;