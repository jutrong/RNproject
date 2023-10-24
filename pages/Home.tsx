import { View, Text, StyleSheet } from "react-native";

export default function Home() {
  return (
    <View style={styles.HomeContainer}>
      <Text>Home!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  HomeContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
