import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput,Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Header = ({onPressCart}) => {
  return (
    <View style={styles.header}>
      <Image
        style={styles.logo}
        source={require('../../assets/images/logo.png')}
      />
      <TouchableOpacity onPress={onPressCart}>
        <Image
          style={styles.cartIcon}
          source={require('../../assets/images/cart.jpg')}
        />
      </TouchableOpacity>
    </View>
    
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'space-between', // Đặt giá trị 'center' để đưa logo ra giữa theo chiều ngang
  },
  logo: {
    width: 100,
    height: 20,
  },
  cartIcon:{
    width: 40,
    height: 40,
  },
});


export default Header;
