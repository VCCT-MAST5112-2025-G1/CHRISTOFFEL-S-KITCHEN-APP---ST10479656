import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  section: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 10,
  },
  label: {
    fontWeight: '600',
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginTop: 5,
    borderRadius: 5,
  },
  picker: {
    marginTop: 5,
    marginBottom: 10,
  },
  chefNote: {
    fontStyle: 'italic',
    marginBottom: 10,
    color: '#444',
  },
  menuSection: {
    marginBottom: 20,
  },
  category: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  empty: {
    fontStyle: 'italic',
    color: '#999',
  },
  card: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    marginBottom: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  cardDesc: {
    fontStyle: 'italic',
    color: '#555',
  },
  cardPrice: {
    color: '#4CAF50',
    marginTop: 4,
  },
  
  success: {
    color: 'green',
    marginTop: 10,
  },

  menuItems: {
    marginTop: 10,
  },
  newItem: {
    marginBottom: 15,
  },

    filterButtonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap', 
        justifyContent: 'center',
        marginBottom: 20,
        gap: 10, 
    },
    filterButton: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 20,
        backgroundColor: '#e0e0e0',
        borderColor: '#ccc',
        borderWidth: 1,
    },
    filterButtonActive: {
        backgroundColor: '#f4511e', 
        borderColor: '#f4511e',
    },
    filterButtonText: {
        color: '#333',
        fontWeight: '500',
        fontSize: 14,
    },
    filterButtonTextActive: {
        color: '#fff', 
    },
    filteredMenuScroll: {
        flex: 1,
    },
    courseImage: {
    width: '100%', 
    height: 150,   
    borderRadius: 10,
    marginBottom: 10,
    resizeMode: 'cover', 
},
bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: '#f2f2f2',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  navIcon: {
    marginHorizontal: 10,
  },
  bottomNavFixed: {
      position: 'absolute',
      bottom: 20,
      left: 0,
      right: 0,
      backgroundColor: '#ccc',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',

    },
    fullScreenContainer: {
      flex: 1,
      backgroundColor: '#fff',
    },
    modalContainer: {
  padding: 20,
  backgroundColor: '#fff',
  flex: 1,
},
popup:{ backgroundColor: "white", 
  padding: 20,
  borderRadius:10
},
    
});


export default styles;