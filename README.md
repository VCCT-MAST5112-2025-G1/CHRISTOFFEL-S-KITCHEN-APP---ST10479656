#  Christoffel's Kitchen Menu Management App

This is a single-screen mobile application built with React Native and Expo that allows the restaurant manager (Christoffel) to dynamically manage the kitchen's menu. Users can add new dishes, view the menu categorized by course, see the total dish count, and remove items as needed.

## Features

* **Dynamic Menu Entry:** Easily input a dish name, description, course (Starter, Main Meal, Dessert, Drink), and price.
* **Menu Preview:** Displays all added menu items, grouped automatically by their respective courses.
* **Real-time Count:** Updates the total number of dishes and the count for each category instantly upon saving or removing an item.
* **Data Validation:** Ensures all required fields are filled before saving a new dish.
* **Course Standardization:** Automatically handles case-insensitivity (e.g., converts "main meal" to "Main Meal") to ensure dishes are categorized correctly.
* **Dish Removal:** Includes a "Remove" button on each menu card with an alert confirmation for easy item deletion.
* **Chef's Message:** A dedicated input field for the chef to post a message or highlight a "Meal of the Day."

---

## 🛠️ Technology Stack

* **Framework:** React Native
* **Platform:** Expo
* **Language:** TypeScript / JavaScript (TSX)

---

##  Setup and Installation

### Prerequisites

You must have **Node.js**, **npm**, and the **Expo ** installed.

```bash
# Install Expo CLI globally (if you haven't already)
npm install -g expo-cli
