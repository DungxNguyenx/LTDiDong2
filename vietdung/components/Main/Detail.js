import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Detail = ({ route }) => {
  const { item, cartItems, setCartItems } = route.params;

  const handleAddToCart = () => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  return (
    <View style={styles.detail}>
      <Image source={item.source} style={styles.image} />
      <Text style={styles.itemText}>{item.name}</Text>
      <TouchableOpacity
        style={styles.addToCartButton}
        onPress={handleAddToCart}
      >
        <Text style={styles.addToCartButtonText}>Add to Cart</Text>
      </TouchableOpacity>
      <Text style={styles.cartItemsText}>Items in Cart: {cartItems.length}</Text>
      {cartItems.map((cartItem) => (
        <View key={cartItem.id}>
          <Image source={cartItem.source} style={styles.cartItemImage} />
          <Text>{cartItem.name}</Text>
          <Text>Quantity: {cartItem.quantity}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  detail: {
    
  },
  image: {
    
  },
  itemText: {
    
  },
  addToCartButton: {
    
  },
  addToCartButtonText: {
    
  },
  cartItemsText: {
    
  },
  cartItemImage: {
    
  },
});

export default Detail;
