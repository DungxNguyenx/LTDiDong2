import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Header from '../Main/Header.js';
import Footer from '../Main/Footer.js';
import Call from '../Main/Call.js';


function Home(props){
    return <View style={{flex:100}}>
      <Header />
      <Call />
      <Footer />
    </View>
}
export default Home