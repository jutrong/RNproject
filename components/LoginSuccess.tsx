import { StyleSheet, Text, View, Pressable } from "react-native";

export default function LoginSuccess() {
  return (
    <View style={styles.container}>
      <Pressable style={styles.btn}>
        <Text>Login Success</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    borderWidth: 1,
    backgroundColor: "yellow",
    padding: 10,
    borderRadius: 10,
  },
});
