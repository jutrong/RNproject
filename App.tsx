import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";
import { WebView } from "react-native-webview";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";

function App() {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const onPressLogin = () => {
    // Do something about login operation
  };
  const onPressForgotPassword = () => {
    // Do something about forgot password operation
  };
  const onPressSignUp = () => {
    // Do something about signup operation
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setUserInfo({ ...userInfo, email: text })}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          secureTextEntry
          placeholder="Password"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setUserInfo({ ...userInfo, password: text })}
        />
      </View>
      <Pressable onPress={onPressForgotPassword}>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </Pressable>
      <Pressable onPress={onPressLogin} style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN </Text>
      </Pressable>
      <Pressable onPress={onPressSignUp} style={styles.signupBtn}>
        <Text>Signup</Text>
      </Pressable>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000d8",
    alignItems: "center",
    justifyContent: "center",
  },
  inputView: {
    width: "80%",
    backgroundColor: "#3AB4BA",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "white",
  },
  forgotAndSignUpText: {
    color: "white",
    fontSize: 11,
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {},
  forgot: {},
  signupBtn: {
    width: "80%",
    backgroundColor: "lightgray",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
  },
});
