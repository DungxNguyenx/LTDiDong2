
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, FlatList, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Modal from 'react-native-modal';
import Header from '../Main/Header';
import Footer from '../Main/Footer';
import CategoryList from '../Main/CategoryList';


export default function Home({ navigation }) {
  const [fashion, setFashion] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [displayedFashion, setDisplayedFashion] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');
  const [cartItems, setCartItems] = useState([]);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const getAPI = () => {
    return fetch(`https://64247d879e0a30d92b1d38af.mockapi.io/db_LT2`)
      .then((response) => response.json())
      .then((data) => {
        setFashion(data);
        setDisplayedFashion(data);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getAPI();
  }, []);

  const getCategory = (data) => {
    const allCategories = data.map(item => item.cat);
    return ['All', ...new Set(allCategories)];
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setDisplayedFashion(fashion);
    } else {
      const filteredFashion = fashion.filter(item => item.cat === category);
      setDisplayedFashion(filteredFashion);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('ProductDetail', { item, cartItems, setCartItems })}
      style={styles.itemContainer}
    >
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.itemText}>{item.name}</Text>
      <Text style={styles.itemTextPrice}>{item.price}$</Text>
      <TouchableOpacity
        style={styles.addToCartButton}
        onPress={() => handleAddToCart(item)}
      >
        <Text style={styles.addToCartButtonText}>{item.id === 'no_result' ? 'Không phù hợp' : 'Add to Cart'}</Text>
      </TouchableOpacity>
      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>Has been add in cart</Text>
          <TouchableOpacity onPress={toggleModal}>
            <Text style={styles.closeModalText}>Đóng</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </TouchableOpacity>
  );

  const handleAddToCart = (item) => {
    if (item.id === 'no_result') {
      alert('Sản phẩm không phù hợp');
      return;
    }

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
    toggleModal();
  };

  const handlePressCart = () => {
    navigation.navigate('Cart', { cartItems, setCartItems });
  };

  const handleSearch = () => {
    const filteredFashion = fashion.filter(item =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );

    if (filteredFashion.length > 0) {
      setDisplayedFashion(filteredFashion);
    } else {
      setDisplayedFashion([{ id: 'no_result', name: 'Không có sản phẩm này' }]);
    }
  };

  return (
    
    <View style={styles.home}>
      <ScrollView>
      <Header onPressCart={handlePressCart} onSearch={(searchText) => handleSearch(searchText)} />
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        onChangeText={(text) => setSearchText(text)}
        onBlur={handleSearch}
      />
      <CategoryList categories={getCategory(fashion)} onSelectCategory={handleSelectCategory} />
      <Image
        style={styles.banner}
        source={require('../../assets/images/banner.webp')}
      />

      <Text style={styles.title}>All Product</Text>
      <FlatList
        data={displayedFashion}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        scrollEnabled={true}
      />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    color: 'black',
    fontSize: 20,
  },
  banner: {
    width: 380,
    height: 200,
    marginLeft: 15
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
    color: '#505050',
    textAlign: 'center',
  },
  addToCartButtonText: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    marginRight: 5,
    color:"#505050",
    borderRadius: 5
  },
  itemTextPrice: {
    color: 'red',
    marginTop: 4,
    marginBottom: 5
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  closeModalText: {
    color: '#3498db',
    textAlign: 'center',
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    margin: 10,
    borderRadius: 15,
  },
});
