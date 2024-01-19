import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {isValidEmail,isValidPassword} from "../XacThuc/Xacthuc"
import {icons,images,colors} from "../../assets/constant"

function Login(props){
    const[keyboardDidShow,setkeyboardDidShow]=useState(false)
    //state for validating
    const[errorEmail,seterrorEmail]=useState('')
    const[errorPassword,seterrorPassword]=useState('')
    //state to store email/pass
    const[email,setEmail]=useState('a@gmail.com')
    const[password,setPassword]=useState('123')
    const isValidationOK = () => email.length>0 && password.length>0 && isValidEmail(email)==true && isValidPassword(password)==true

    const{navigation,router}=props
    const{navigate,Back}=navigation
    
    return <View style={{backgroundColor: 'white', flex: 100}}>
        <View style={{alignItems: 'center'}}>
            <Image source={images.logo}
                style={{resizeMode: 'contain', height: 100, width: 300, marginTop: 100}}/>
            <Text style={styles.title}>Login to Your Account</Text>
        </View>

        <View style={{marginHorizontal: 15,marginTop: 20}}>
            <TextInput
            onChangeText={(text)=>{
                if(isValidEmail(text)==false){
                    seterrorEmail('Email is not in correct format')
                }
                else{
                    seterrorEmail('')
                }
                seterrorEmail(isValidEmail(text) == true?'':'Email not in correct format')
                setEmail(text)
            }}
            placeholder="example@gmail.com"
            value={email}
            style={{...styles.input, alignSelf: 'center'}}
            />
            <View style={{backgroundColor:colors.primary,width:'10%'}} />
            <Text style={{color:colors.primary }}>{errorEmail}</Text>
            
            <TextInput
            onChangeText={(text)=>{
                seterrorPassword(isValidPassword(text)==true?'':'Password be must least 3 characters')
                setPassword(text)
            }}
            secureTextEntry={true}
            value={password}
            placeholder="Enter your password"
            style={{...styles.input, alignSelf: 'center'}}
            />
            <View style={{backgroundColor:colors.primary,width:'10%'}} />
            <Text style={{color:colors.primary }}>{errorPassword}</Text>
        </View>

        <View style={{flex:20,marginTop:20}}>
            <TouchableOpacity
                disabled ={isValidationOK()==false}
                onPress={() => {
                    if (email && password)
                    {
                        navigate('Home')
                    }
                }}

                style={{
                    backgroundColor: isValidationOK()==true?colors.primary:colors.inactive,
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
                }}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {
                    navigate('Register')
                }}>
                <Text
                    style={{
                        padding: 10,
                        color: 'black',
                        alignSelf: 'center',
                        textDecorationLine: 'underline'
                    }}
                >Don't have account? Register now</Text>
            </TouchableOpacity>
        </View>

        <View style={{
                flexDirection: 'row',
                alignSelf: 'center'
            }}>
                <Text style={{
                    color: colors.primary
                }}>-----------</Text>
                <Text style={{
                    color: colors.primary
                }}>Login with another account?</Text>
                <Text style={{
                    color: colors.primary
                }}>-----------</Text>
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
                    source={icons.facebook}
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
                    source={icons.google}
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
  
  export default Login;

