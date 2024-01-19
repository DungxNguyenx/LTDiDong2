import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList, TouchableOpacity, View, Text, Image,ScrollView,TextInput} from 'react-native';
import * as Animatable from 'react-native-animatable';
import axios from 'axios';
import Icon from "react-native-vector-icons/FontAwesome5"
import { icons, images, colors } from "../../assets/constant"

function Call() {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);
  
  const [searchTerm, setSearchTerm] = useState("");
  const filteredProducts = products.filter((item) =>
  item.title.toLowerCase().includes(searchTerm.toLowerCase())
);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        setProducts(json);

      });
  }, []);

  const addToCart = (item) => {
    const newItem = {
      name: item.title,
      url: item.image,
      price: item.price,
      quantity: 1,
    };
    global.mycart.push(newItem);
    // Thay đổi dòng sau để truyền dữ liệu giỏ hàng cập nhật
    navigation.navigate('Cart', { updatedCart: [...global.mycart] });
  };

  return (
    <View style={{ width: '100%', backgroundColor: 'white', flex: 70 }}>
      <View style={{
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row'
      }}>
        <Icon color={colors.inactive} name={'search'} size={20}
          style={{

            position: 'absolute',
            top: 18,
            left: 10
          }} />
        <ScrollView>
          <View style={{
            paddingHorizontal: 10,
            marginBottom: 10
          }}>
            <TextInput
              style={{
                marginLeft:25,
                borderWidth: 1,
                borderRadius: 20,
                width: '80%',
                padding: 10, 
              }}
              placeholder="Search products..."
              value={searchTerm}
              onChangeText={(text) => setSearchTerm(text)}
            />
          </View>
        </ScrollView>
        <Icon style={{ marginEnd: 20 }} color={colors.inactive} name={'bars'} size={30} />
      </View>
      <Image
        style={{width: 415, height: 70, alignSelf: 'center', resizeMode: 'cover',}}
        source={require('../../assets/images/banner.webp')}
      />
      <FlatList
        horizontal={false}
        keyExtractor={(item) => item.name}
        numColumns={2}
        data={filteredProducts}
        
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ProductDetail', {
                name: item.title,
                url: item.image,
                price: item.price,
                description:item.description,
                addToCart: addToCart, // Thêm hàm addToCart vào navigation params
              })
            }
            style={{
              flex: 1,
              alignItems: 'center',
              margin: 10,
            }}
          >
            <View style={{ flexDirection: 'row' }}>
              <Image
                source={{ uri: item.image }}
                style={{
                  height: 100,
                  width: 100,
                  margin: 10,
                  resizeMode: 'cover',
                }}
              />
            </View>
            <Text style={{ color: 'black' }}>{item.title}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ color: 'red', marginTop: 10, fontSize: 18 }}>
              ${item.price}
            </Text>
            <TouchableOpacity
              onPress={() => addToCart(item)}
              style={{
                backgroundColor: '#008000',
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
                height: 20,
                marginTop: 10, 
                marginLeft: 55,
                marginRight: 0,
              }}
            >
              <Animatable.Text
                animation="flash"  // Chọn hiệu ứng nhấp nháy
                iterationCount="infinite" // Lặp vô hạn
                style={{ color: 'white' }}
              >
                Add to cart
              </Animatable.Text>
            </TouchableOpacity>
          </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default Call;