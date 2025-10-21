import React from "react";
import { View, Text, StyleSheet, FlatList} from "react-native";

class PostScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            posts: [],
        };
    }

    async componentDidMount() {
        const data = await fetch("https://jsonplaceholder.typicode.com/posts");
        const jsonData = await data.json();
        const firstten = jsonData.slice(10);
        this.setState({
            posts: firstten,
        });
    }

    render() {
        const {posts} = this.state;
        return(
            <View>
                <Text>Posts Screen</Text>
                <FlatList
                    keyExtractor={posts => posts.id}
                    data = {posts}
                    renderItem={({item}) => (
                        <View>
                            <Text>{item.title}</Text>
                            <Text>{item.body}</Text>
                        </View>
                    )}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({});

export default PostScreen;