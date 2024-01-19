import React, { useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

function ProductDetail({ route }) {
  const navigation = useNavigation();
  const { name, url, price, description } = route.params;
  const [count, setCount] = useState(1);

  const addToCart = (item) => {
    const newItem = {
      name,
      url,
      price,
      quantity: count,
    };
    global.mycart.push(newItem);
    setCount(1);
    navigation.navigate("Cart");
  };

  return (
    <ScrollView>
      <View style={{ flex: 30, marginHorizontal: 10 }}>
        <Image
          source={{ uri: url }}
          style={{ height: 200, width: "100%", resizeMode: "center" }}
        />
        <Text>Name: {name}</Text>
        <Text>Price: ${price}</Text>
        <Text>description:{description}</Text>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <TouchableOpacity
          onPress={() => addToCart(item)}
          style={{
            backgroundColor: "gray",
            justifyContent: "center",
            alignItems: "center",
            height: 20,
            marginVertical: 10,
          }}
        >
          <Text style={{ color: "white" }}>Add to cart</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={{
            backgroundColor: "blue",
            justifyContent: "center",
            alignItems: "center",
            height: 20,
            marginVertical: 10,
          }}
        >
          <Text style={{ color: "white" }}>View Content</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => addToCart}
          style={{
            backgroundColor: "red",
            justifyContent: "center",
            alignItems: "center",
            height: 20,
            marginVertical: 10,
          }}
        >
          <Text style={{ color: "white" }}>View Cart</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default ProductDetail;
