import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default function Body({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username && password) {
        //Bạn có thể thực hiện xác thực tại đây (gửi thông tin đăng nhập đến máy chủ, v.v.)
      alert(`Login with Username: ${username} and Password: ${password}`);
    } else {
      alert('Please enter both username and password.');
    }
  };

  return (
    <View style={styles.home}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')} >
        <Text style={styles.buttonText}>Login Account</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
      <TouchableOpacity style={styles.button1}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100, // Adjust the width as needed
    height: 100, // Adjust the height as needed
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: 250,
    height:50,
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    width:300,
    height:50,
    bottom:-20,
    marginBottom: 10,
  },
  button1: {
    backgroundColor: '#FF0000',
    padding: 10,
    borderRadius: 5,
    width:300,
    height:50,
    bottom:-20,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});