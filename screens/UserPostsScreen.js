import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList} from "react-native";

class UserScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            users: [],
        };
    }

     async componentDidMount() {
        const data = await fetch("https://jsonplaceholder.typicode.com/users");
        const jsonData = await data.json();
        this.setState({
            users: jsonData,
        });
    }

    render() {
        const {users} = this.state;
        return(
            <View>
                <Text>User List Screen</Text>
                <FlatList
                    keyExtractor={users => users.id}
                    data = {users}
                    renderItem={({item}) => (
                        <View>
                            <TouchableOpacity>
                               <Text>{item.username}</Text> 
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({});

export default UserScreen;