import { View, Text, StyleSheet } from "react-native";

export default function Setting() {
  return (
    <View style={styles.SettingContainer}>
      <Text>Setting!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  SettingContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
