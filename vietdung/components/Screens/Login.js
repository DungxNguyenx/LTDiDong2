import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import { colors } from "../../assets/constant";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState('vd');
  const [password, setPassword] = useState('123');

  const handleLogin = async () => {
    if (username && password) {
      try {
        const existingAccountsString = await AsyncStorage.getItem('accounts');
        const existingAccounts = existingAccountsString
          ? JSON.parse(existingAccountsString)
          : [];

        // Kiểm tra thông tin đăng nhập với tất cả các tài khoản
        const loggedInAccount = existingAccounts.find(
          (account) =>
            account.username === username && account.password === password
        );

        if (loggedInAccount) {
          alert('Đăng nhập thành công');
          navigation.navigate('Home');
        } else {
          alert('Sai tên người dùng hoặc mật khẩu');
        }
      } catch (error) {
        console.error('Lỗi khi đăng nhập:', error);
        alert('Đã xảy ra lỗi khi đăng nhập. Vui lòng thử lại.');
      }
    } else {
      alert('Vui lòng nhập tên người dùng và mật khẩu.');
    }
  };

  const handleRegister = () => {
    navigation.navigate("Register");
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
        <Text style={styles.title}>Login to Your Account</Text>
      </View>

      <View style={{ marginHorizontal: 15, marginTop: 20 }}>
        <TextInput
          style={{ ...styles.input, alignSelf: "center" }}
          placeholder="username"
          onChangeText={(text) => setUsername(text)}
          value={username}
        />
        <TextInput
          style={{ ...styles.input, alignSelf: "center" }}
          placeholder="password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
        />
      </View>
      <View style={{ flex: 20, marginTop: 20 }}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleRegister}>
          <Text style={styles.buttonText1}>
            Don't have account? Register now
          </Text>
        </TouchableOpacity>
        <View style={{
                flexDirection: 'row',
                alignSelf: 'center',
                marginTop: 50,
            }}>
                <Text style={{
                    color: '#ED6263'
                }}>--------------</Text>
                <Text style={{
                    color: '#ED6263',
                    marginHorizontal: 10,
                }}>Login with another account?</Text>
                <Text style={{
                    color: '#ED6263'
                }}>--------------</Text>
        </View>
      </View>
      <View style={{flex:20,marginTop:20}}>
             <TouchableOpacity
                onPress={()=>{alert('Facebook!!')
                }}
                style={{
                    backgroundColor: '#385499',
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginHorizontal: 20,
                    marginBottom: 10,
                    flexDirection: 'row'
                }}>
                <Image
                    source={require("../../assets/images/icon_facebook.png")}
                    style={{
                        width: 20, // Đặt chiều rộng của hình ảnh
                        height: 20, // Đặt chiều cao của hình ảnh
                        marginRight: 10, // Khoảng cách giữa hình ảnh và văn bản
                    }}/>
                <Text style={{
                    color: 'white',
                    padding: 10,
                    textAlign: 'center',
                    fontSize: 20,
                }}>Log in with Facebook</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={()=>{alert('Google!!')
                }}
                style={{
                    backgroundColor: 'white',
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: 'black',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginHorizontal: 20,
                    flexDirection: 'row'
                }}>
                <Image
                    source={require("../../assets/images/icon_google.png")}
                    style={{
                        width: 20, // Đặt chiều rộng của hình ảnh
                        height: 20, // Đặt chiều cao của hình ảnh
                        marginRight: 10, // Khoảng cách giữa hình ảnh và văn bản
                    }}/>
                <Text style={{
                    color: 'black',
                    padding: 10,
                    textAlign: 'center',
                    fontSize: 20,
                }}>Log in with Google</Text>
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
    backgroundColor: "#EEEEEE",
    borderWidth: 1,
    borderColor: "#000000",
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

export default Login;
