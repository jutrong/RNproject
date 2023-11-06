import { Pressable, StyleSheet, Text, View, Button } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useState, useEffect } from "react";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";

WebBrowser.maybeCompleteAuthSession();

function GoogleLogin() {
  const [userInfo, setUserInfo] = useState(null);

  // Google 인증 응답이 바뀔때마다 실행
  useEffect(() => {
    handleSignInWithGoogle();
  }, [response]);

  const [request, response, promptAsync] = Google.useAuthRequest({
    webClientId:
      "1098165106971-09kojrroftco5u5sbukm2u5tqlqqsnqj.apps.googleusercontent.com",
    iosClientId:
      "1098165106971-8fsdum3316n49rm5f9kh3h12n286c1u1.apps.googleusercontent.com",
    androidClientId:
      "1098165106971-dil5mt8pbdm0oprunktquhmol339jefd.apps.googleusercontent.com",
  });

  const handleSignInWithGoogle = async () => {
    const user = await AsyncStorage.getItem("@user");
    if (!user) {
      if (response?.type === "success") {
        // 인증 요청에 대한 응답이 성공이면, 토큰을 이용하여 유저 정보를 가져옴.
        await getUserInfo(response.authentication?.accessToken);
      }
    } else {
      // 유저 정보가 이미 있으면, 유저 정보를 가져옴.
      setUserInfo(JSON.parse(user));
    }
  };
  // 토큰을 이용하여 유저 정보를 가져오는 함수
  const getUserInfo = async (token) => {
    if (!token) return;
    try {
      const response = await fetch(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const userInfoResponse = await response.json();
      // 유저 정보를 AsyncStorage에 저장, 상태업뎃
      await AsyncStorage.setItem("@user", JSON.stringify(userInfoResponse));
      setUserInfo(userInfoResponse);
    } catch (e) {
      console.log(e);
    }
  };
  const handleLogout = async () => {
    await AsyncStorage.removeItem("@user");
    setUserInfo(null);
  };

  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(userInfo)}</Text>
      <Pressable
        style={[styles.button, styles.buttonGoogle]}
        onPress={() => {
          promptAsync();
        }}
      >
        <View style={styles.buttonContent}>
          <Icon name="google" style={styles.icon} />
          <Text style={styles.buttonText}>Login With Google</Text>
        </View>
      </Pressable>
      <Button
        title="logout"
        onPress={() => {
          AsyncStorage.removeItem("@user");
        }}
      ></Button>
    </View>
  );
}

export default GoogleLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: "auto",
    display: "flex",
    paddingHorizontal: 6,
    borderRadius: 5,
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  buttonGoogle: {
    backgroundColor: "#3F85F4",
    borderWidth: 1,
    borderColor: "#0f66f1",
  },
  icon: {
    marginRight: 12,
    fontSize: 24,
    color: "white",
  },
  buttonText: {
    color: "white",
  },
});
