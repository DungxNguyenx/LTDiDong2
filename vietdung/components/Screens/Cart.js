import React, { useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity, FlatList } from "react-native";

global.mycart = [];

function Cart({ route, navigation }) {
    const { name, url, price } = route.params;
    const [count, setCount] = useState(1);

    const addToCart = () => {
        const newItem = {
            name,
            url,
            price,
            quantity: count,
        };
        global.mycart.push(newItem);
        setCount(1);
        // Navigate to the cart screen or any other screen you want to show the updated cart
        navigation.navigate("Cart");
    };

    return (
        <ScrollView>
            <View style={{ flex: 100 }}>
                {/* <View
                    style={{
                        flex: 30,
                        borderWidth: 2,
                        borderRadius: 10,
                        marginHorizontal: 10,
                    }}
                >
                    <Image
                        source={{ uri: url }}
                        style={{ height: 200, width: "100%", resizeMode: "center" }}
                    />
                    <Text>Name: {name}</Text>
                    <Text>Price: ${price}</Text>
                </View> */}
                
                <TouchableOpacity
                    style={{
                        backgroundColor: "green",
                        height: 40,
                        width: "50%",
                        justifyContent: "center",
                        borderRadius: 10,
                        alignItems: "center",
                        alignSelf: "center",
                    }}
                    onPress={addToCart}
                >
                    {/* <Text style={{ color: "white", fontSize: 20 }}>Add to Cart</Text> */}
                </TouchableOpacity>
                <View style={{ flex: 50 }}>
                    <Text style={{ fontSize: 18, fontWeight: "bold", marginVertical: 10 }}>Cart</Text>

                    {global.mycart.length > 0 ? (
                        <FlatList
                            data={global.mycart}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => (
                                <View>
                                    <Image source={{ uri: item.url }} style={{ height: 50, width: 50, resizeMode: 'cover' }} />
                                    <Text>{item.name} - ${item.price} - Quantity: {item.quantity}</Text>
                                </View>
                            )}
                        />
                    ) : (
                        <Text>Your cart is empty.</Text>
                    )}
                </View>
            </View>
        </ScrollView>
    );
}

export default Cart;