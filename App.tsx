import React, { useState, useMemo } from 'react';
import { Text, View, TextInput, Button, Alert, ScrollView } from 'react-native';

import { DishItem } from './types'; 
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
    
    const [dishName, setDishName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [course, setCourse] = useState<string>('');
    const [price, setPrice] = useState<string>('');
    const [menuItems, setMenus] = useState<MenuItem[]>([]);
    const [itemAdded, setItemAdded] = useState(false);
    const [items, setItems] = useState<DishItem[]>([]);
    const [chefMessage, setChefMessage] = useState('');

    
    const handleSave = () => {
       
        const validCourses = ['Starter', 'Main Meal', 'Dessert', 'Drink'];
        const trimmedCourse = course.trim();
        
   
        const standardizedCourse = validCourses.find(c => 
            c.toLowerCase() === trimmedCourse.toLowerCase()
        );

        if (!dishName || !description || !standardizedCourse || !price) {
            Alert.alert('Error', 'Please fill in all fields, including a valid Course (Starter, Main Meal, Dessert, or Drink).');
            return;
        }

        const priceNumber = parseFloat(price);

        const newItem: MenuItem = {
            name: dishName,
            description: description,
            
            course: standardizedCourse as 'Starter' | 'Main Meal' | 'Dessert' | 'Drink', 
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

        <Button title="Save Dish" onPress={handleSave}/>
          {itemAdded && <Text style={styles.success}>Menu Item Added Successfully!</Text>}
          
     
       <Text style={styles.section}>Total Dishes: {menuItems.length}</Text> 
       <Text style={styles.section}>Menu Preview</Text>

       {chefMessage ? (
          <Text style={styles.chefNote}>Chef says: {chefMessage}</Text>
       ) : null}

       {Object.entries(groupedMenu).map(([category, items]) => (
        <View key={category} style={styles.menuSection}>
          <Text style={styles.category}>{category} ({items.length})</Text>
          {items.length === 0 ? (
            <Text style={styles.empty}>No items yet.</Text>
          ) : (
            
            items.map((item, index) => (
              <View key={index} style={styles.card}>
                <Text style={styles.cardTitle}>{item.name}</Text>
                <Text style={styles.cardDesc}>{item.description}</Text>
                <Text style={styles.cardDesc}>Course: {item.course}</Text>
                <Text style={styles.cardPrice}>
                  R {item.price}
                  </Text> 
              </View>
            ))
          )}
        </View>
      ))}
      </ScrollView>
    );
};

export default MenuScreen;
