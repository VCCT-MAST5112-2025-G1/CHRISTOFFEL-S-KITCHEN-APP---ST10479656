import React, { useState, useMemo } from 'react';
import {Text, View, TextInput,
  Button,  Alert, ScrollView, Image,TouchableOpacity ,Modal } from 'react-native';
import styles from './styles';

interface MenuItem {
  name: string;
  description: string;
  course: 'Starter' | 'Main Meal' | 'Dessert' | 'Drink';
  price: number;
}

interface GroupedMenu {
  [key: string]: MenuItem[];
}

const MenuScreen = () => {
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('');
  const [price, setPrice] = useState('');
  const [menuItems, setMenus] = useState<MenuItem[]>([]);
  const [chefMessage, setChefMessage] = useState('');
  const [itemAdded, setItemAdded] = useState(false);

  const[selectedCourse, setSelectedCourse] = useState<string |null>(null);
  const[modalVisible, setModalVisible] = useState(false);

  const handleSave = () => {
    const validCourses = ['Starter', 'Main Meal', 'Dessert', 'Drink'];
    const trimmedCourse = course.trim();
    const standardizedCourse = validCourses.find(
      (c) => c.toLowerCase() === trimmedCourse.toLowerCase()
    );

    if (!dishName || !description || !standardizedCourse || !price) {
      Alert.alert(
        'Error',
        'Please fill in all fields, including a valid Course (Starter, Main Meal, Dessert, or Drink).'
      );
      return;
    }

    const priceNumber = parseFloat(price);

    const newItem: MenuItem = {
      name: dishName,
      description,
      course: standardizedCourse as MenuItem['course'],
      price: priceNumber,
    };

    setMenus((prevItems) => [...prevItems, newItem]);
    setDishName('');
    setDescription('');
    setCourse('');
    setPrice('');
    setItemAdded(true);
    Alert.alert('Success', 'Menu item added successfully!');
  };

  const handleRemove = (course: string, index: number) => {
    setMenus((prevItems) =>
      prevItems.filter((item, i) => !(item.course === course && i === index))
    );
  };

  const groupedMenu = useMemo(() => {
    const result: GroupedMenu = {
      Starter: [],
      'Main Meal': [],
      Dessert: [],
      Drink: [],
    };

    menuItems.forEach((item) => {
      if (result[item.course]) {
        result[item.course].push(item);
      }
    });

    return result;
  }, [menuItems]);


  

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Christoffell's Kitchen</Text>
      <Text style={styles.subtitle}>The Best In Cape Town</Text>
       <Modal visible={modalVisible} animationType="slide">
  <ScrollView style={styles.modalContainer}>

    <Text style={styles.section}>{selectedCourse} Dishes</Text>
    {selectedCourse && groupedMenu[selectedCourse].map((item, index) => (
      <View key={index} style={styles.card}>
        <Text style={styles.cardTitle}>{item.name}</Text>
        <Text style={styles.cardDesc}>{item.description}</Text>
        <Text style={styles.cardPrice}>R {item.price}</Text>
        <Button
          title="Remove"
          color="#cc0000"
          onPress={() => {
            handleRemove(selectedCourse, index);
            setModalVisible(false); 
          }}
        />
      </View>
    ))}
    <Button title="Close" onPress={() => setModalVisible(false)} />
  </ScrollView>
</Modal>
      <Text style={styles.section}>Menu Preview</Text>
      {chefMessage ? (
        <Text style={styles.chefNote}>Chef says: {chefMessage}</Text>
      ) : null}

      {/* Starter Section */}
      <View style={styles.menuSection}>
        <Text style={styles.category}>Starter ({groupedMenu['Starter'].length})</Text>
        <TouchableOpacity onPress={() => {
          setSelectedCourse('Starter');
          setModalVisible(true);
        }}>
        <Image source={require('./assets/starter.png')} style={styles.courseImage} />
        </TouchableOpacity>
        {groupedMenu['Starter'].map((item, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text style={styles.cardDesc}>{item.description}</Text>
            <Text style={styles.cardPrice}>R {item.price}</Text>
            <Button
              title="Remove"
              color="#cc0000"
              onPress={() => handleRemove('Starter', index)}
            />
          </View>
        ))}
      </View>

      {/* Main Meal Section */}
      <View style={styles.menuSection}>
        <Text style={styles.category}>Main Meal ({groupedMenu['Main Meal'].length})</Text>
        <TouchableOpacity onPress={() => {
          setSelectedCourse('Main Meal');
          setModalVisible(true);
        }}>
        <Image source={require('./assets/main_meal.png')} style={styles.courseImage} />
        </TouchableOpacity>
        {groupedMenu['Main Meal'].map((item, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text style={styles.cardDesc}>{item.description}</Text>
            <Text style={styles.cardPrice}>R {item.price}</Text>
            <Button
              title="Remove"
              color="#cc0000"
              onPress={() => handleRemove('Main Meal', index)}
            />
          </View>
        ))}
      </View>

     
      <View style={styles.menuSection}>
        <Text style={styles.category}>Dessert ({groupedMenu['Dessert'].length})</Text>
        <TouchableOpacity onPress={() => {
          setSelectedCourse('Dessert');
          setModalVisible(true);
        }}>
        <Image source={require('./assets/dessert.png')} style={styles.courseImage} />
         </TouchableOpacity>
        {groupedMenu['Dessert'].map((item, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text style={styles.cardDesc}>{item.description}</Text>
            <Text style={styles.cardPrice}>R {item.price}</Text>
            <Button
              title="Remove"
              color="#cc0000"
              onPress={() => handleRemove('Dessert', index)}
            />
          </View>
        ))}
      </View>

    
      <View style={styles.menuSection}>
        <Text style={styles.category}>Drink ({groupedMenu['Drink'].length})</Text>
        <TouchableOpacity onPress={() => {
          setSelectedCourse('Drink');
          setModalVisible(true);
        }}>
        <Image source={require('./assets/drinks.png')} style={styles.courseImage} />
         </TouchableOpacity>
        {groupedMenu['Drink'].map((item, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text style={styles.cardDesc}>{item.description}</Text>
            <Text style={styles.cardPrice}>R {item.price}</Text>
            <Button
              title="Remove"
              color="#cc0000"
              onPress={() => handleRemove('Drink', index)}
            />
          </View>
        ))}
      </View>

      {/* Add New Menu Item Section */}
      <Text style={styles.section}>MEAL OF THE DAY</Text>
      <Text style={styles.section}>Chef's Message</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Meal Of the Day!"
        value={chefMessage}
        onChangeText={setChefMessage}
      />

      <Text style={styles.section}>Add New Menu Item</Text>
      <Text style={styles.label}>Dish Name:</Text>
      <TextInput
        style={styles.input}
        value={dishName}
        onChangeText={setDishName}
        placeholder="Enter dish name"
      />

      <Text style={styles.label}>Description:</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        placeholder="Enter description"
      />

      <Text style={styles.label}>Course:</Text>
      <TextInput
        style={styles.input}
        value={course}
        onChangeText={setCourse}
        placeholder="Starter, Main Meal, Dessert, Drink"
      />

      <Text style={styles.label}>Price:</Text>
      <TextInput
        style={styles.input}
        value={price}
        onChangeText={setPrice}
        placeholder="Enter price"
        keyboardType="numeric"
      />

      <Button title="Save Dish" onPress={handleSave} />
      {itemAdded && <Text style={styles.success}>Menu Item Added Successfully!</Text>}
      <Text style={styles.section}>Total Dishes: {menuItems.length}</Text>
    </ScrollView>
  );
};

export default MenuScreen;
