import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput,Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Header = ({ onSearch, onPressCart }) => {
  return (
    <View style={styles.header}>
      <Image
        style={styles.logo}
        source={require('../../assets/logo.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center', // Đặt giá trị 'center' để đưa logo ra giữa theo chiều ngang
  },
  logo: {
    width: 100,
    height: 20,
  }
});


export default Header;
