import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Register = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    if (username && password) {
      try {
        // Lấy danh sách tài khoản đã đăng ký từ AsyncStorage
        const existingAccountsString = await AsyncStorage.getItem("accounts");
        const existingAccounts = existingAccountsString
          ? JSON.parse(existingAccountsString)
          : [];

        // Kiểm tra xem tài khoản có tồn tại chưa
        const isAccountExist = existingAccounts.some(
          (account) => account.username === username
        );

        if (!isAccountExist) {
          // Thêm tài khoản mới vào danh sách
          const newAccount = { username, password };
          existingAccounts.push(newAccount);

          // Lưu lại danh sách tài khoản vào AsyncStorage
          await AsyncStorage.setItem(
            "accounts",
            JSON.stringify(existingAccounts)
          );

          // Thực hiện đăng nhập tự động
          handleLogin();
        } else {
          alert(
            "Tài khoản đã tồn tại. Vui lòng chọn tên người dùng khác."
          );
        }
      } catch (error) {
        console.error("Lỗi khi đăng ký:", error);
        alert("Đã xảy ra lỗi khi đăng ký. Vui lòng thử lại.");
      }
    } else {
      alert("Vui lòng nhập cả tên người dùng và mật khẩu.");
    }
  };

  const handleLogin = async () => {
    alert("Register successful.");
    navigation.navigate("Login");
  };
  return (
    <View style={{ backgroundColor: "white", flex: 100 }}>
      <View style={{ alignItems: "center" }}>
        <Image
          source={require("../../assets/images/logo.png")}
          style={{
            resizeMode: "contain",
            height: 100,
            width: 300,
            marginTop: 200,
          }}
        />
        <Text style={styles.title}>Register Account</Text>
      </View>
      <View style={{ marginHorizontal: 15, marginTop: 20 }}>
      <TextInput
        style={{...styles.input, alignSelf: 'center'}}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <TextInput
        style={{...styles.input, alignSelf: 'center'}}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />
      </View>
      <View style={{ flex: 20, marginTop: 20 }}>
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogin}>
          <Text style={styles.buttonText1}>
          Have account? Login now
          </Text>
        </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    width: 300,
    height: 50,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#EEEEEE',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 15,
  },
  button: {
    backgroundColor: "#ED6263",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
  buttonText: {
    color: "white",
    padding: 10,
    textAlign: "center",
    fontSize: 20,
  },
  buttonText1: {
    padding: 10,
    color: "black",
    alignSelf: "center",
    textDecorationLine: "underline",
  },
});

export default Register;
