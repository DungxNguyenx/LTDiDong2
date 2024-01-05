import Header from '../Main/Header.js';
import Footer from '../Main/Footer.js';
import React, { useState } from 'react';
import { StyleSheet, View, Image, FlatList, Text, TouchableOpacity } from 'react-native';
import Cart from './Cart.js';

const pic = [
  { id: '1', name: 'Áo 1', source: require('../../assets/images/1.webp') },
  { id: '2', name: 'Áo 2', source: require('../../assets/images/2.webp') },
  { id: '3', name: 'Áo 3', source: require('../../assets/images/3.webp') },
  { id: '4', name: 'Áo 4', source: require('../../assets/images/4.webp') },
  { id: '5', name: 'Áo 5', source: require('../../assets/images/5.webp') },
  { id: '6', name: 'Áo 6', source: require('../../assets/images/6.webp') },
];

export default function Home({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Detail', { item })}
      style={styles.itemContainer}
    >
      <Image source={item.source} style={styles.image} />
      <Text style={styles.itemText}>{item.name}</Text>
      <TouchableOpacity
        style={styles.addToCartButton}
        onPress={() => handleAddToCart(item)}
      >
        <Text style={styles.addToCartButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      setCartItems((prevItems) =>
        prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
    }
  };
  const handlePressCart = () => {
    navigation.navigate('Cart', { cartItems });
  };
  <Cart route={{ params: { cartItems, setCartItems } }} />

  return (
    <View style={styles.home}>
       <Header onPressCart={handlePressCart} onSearch={(searchText) => console.log(searchText)} />
 
      <Image
        style={styles.banner}
        source={require('../../assets/images/banner.webp')}
      />
      <Text style={styles.title}>Sản phẩm</Text>
      <FlatList
        data={pic}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
      <Footer></Footer>
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: 'white',
    margin: 10,
  },
  title: {
    color: 'black',
    fontSize: 20,
 
  },
  banner: {
    width: 380,
    height: 200,
  
  },
  itemContainer: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
  },
  image: {
    width: 180,
    height: 180,
    marginBottom: 5,
  },
  itemText: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
  },
});
