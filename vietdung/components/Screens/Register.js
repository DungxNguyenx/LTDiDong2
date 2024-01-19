import React, { useState, useEffect } from "react";
import { Text, View, Image, ImageBackground, TouchableOpacity, Alert, TextInput, KeyboardAvoidingView, Keyboard, StyleSheet } from "react-native";
import { icons, images, colors } from "../../assets/constant"

import { isValidEmail, isValidPassword } from "../XacThuc/Xacthuc"


function Register(props) {
    const [keyboardDidShow, setkeyboardDidShow] = useState(false)
    //state for validating
    const [errorEmail, seterrorEmail] = useState('')
    const [errorPassword, seterrorPassword] = useState('')
    //state to store email/pass
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const isValidationOK = () => email.length > 0 && password.length > 0 && isValidEmail(email) == true && isValidPassword(password) == true

    const{navigation,router}=props
    const{navigate,Back}=navigation
    return <View style={{backgroundColor: 'white', flex: 100}}>
    <View style={{alignItems: 'center'}}>
        <Image source={images.logo}
            style={{resizeMode: 'contain', height: 100, width: 300, marginTop: 100}}/>
        <Text style={styles.title}>Register Account</Text>
    </View>
    <View style={{marginHorizontal: 15,marginTop: 20}}>
        <TextInput>Email</TextInput>
        <TextInput
        onChangeText={(text) => {
            seterrorEmail(isValidEmail(text) == true ? '' : 'Email not in correct format')
            setEmail(text)
        }}
        placeholder="example@gmail.com"
        placeholderTextColor={colors.placeholder}
        style={{...styles.input, alignSelf: 'center'}}
        />
        <View style={{backgroundColor:colors.primary,width:'10%'}} />
        <Text style={{color:colors.primary }}>{errorEmail}</Text>

        <TextInput>Password</TextInput>
        <TextInput
        onChangeText={(text) => {
            seterrorPassword(isValidPassword(text) == true ? '' : 'Password be must least 3 characters')
            setPassword(text)
        }}
        secureTextEntry={true}
        placeholder="Enter your password"
        placeholderTextColor={colors.placeholder}
        style={{...styles.input, alignSelf: 'center'}}
        />
        <View style={{backgroundColor:colors.primary,width:'10%'}} />
        <Text style={{color:colors.primary }}>{errorPassword}</Text>

        <TextInput>Re-Enter</TextInput>
        <TextInput
        onChangeText={(text) => {
            seterrorPassword(isValidPassword(text) == true ? '' : 'Password be must least 3 characters')
            setPassword(text)
        }}
        secureTextEntry={true}
        placeholder="Confirm your password"
        placeholderTextColor={colors.placeholder}
        style={{...styles.input, alignSelf: 'center'}}
        />
        <View style={{backgroundColor:colors.primary,width:'10%'}} />
        <Text style={{color:colors.primary }}>{errorPassword}</Text>
    </View>

    <View style={{flex:20,marginTop:20}}>
        <TouchableOpacity
            disabled={isValidationOK() == false}
            onPress={() => {
            // alert(`Email=${email},password=${password}`)
            alert('Register successful!')
            navigate("Login")
            }}
            style={{
                backgroundColor: 'red',
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginHorizontal: 20
            }}>
            <Text style={{
                color: 'white',
                padding: 10,
                textAlign: 'center',
                fontSize: 20,
            }}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity
                onPress={() => {
                    navigate('Login')
                }}>
                <Text
                    style={{
                        padding: 10,
                        color: 'black',
                        alignSelf: 'center',
                        textDecorationLine: 'underline'
                    }}
                >Have account? Login now</Text>
            </TouchableOpacity>
    </View>
    </View>
}


const styles = StyleSheet.create({
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
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
  });
export default Register;