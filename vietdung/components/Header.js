import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Image source={require('../assets/logo.jpg')}
       style={{marginTop:-60 }} />      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    header: {
    flex:'1',
  },
});