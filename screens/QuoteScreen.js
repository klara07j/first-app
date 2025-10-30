import React from "react";
import { Text, StyleSheet, View } from "react-native";

const QuoteScreen = () => {
  let quote = "Don't let other people tell you what you want.";

  const author = "- Pat Riley";

  return (
    <View style={styles.container}>
      <Text style={styles.quoteStyle}>{quote}</Text>
      <Text>{author}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    padding: 10,
  },
  quoteStyle: {
    fontSize: 25,
    textAlign: "center",
    marginBottom: 10,
  },
  authorStyle: {
    fontSize: 20,
    textAlign: "left",
  },
});

export default QuoteScreen;