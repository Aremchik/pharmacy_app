import React from "react";
import { ScrollView, View, TouchableOpacity, StyleSheet, Text, Image } from "react-native";

export const Sections = () => {

  const buttonData = [
    { id: 1, title: 'Каталог' },
    { id: 2, title: 'Мои заказы' },
    { id: 3, title: 'О сервисе' },
  ];

    return(
        
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.sectionContainer}>
      {buttonData.map((button) => (
        <TouchableOpacity key={button.id} style={styles.button}>
          <Text style={styles.buttonText}>{button.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>

        )
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginVertical: 20,
    paddingHorizontal: 10,
    height: 130,
  },
  button: {
    backgroundColor: '#F2F2F2',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
    borderRadius: 10,
    width: 150
  },
  buttonText: {
    color: '#232324',
    fontSize: 16,
    fontWeight: 'bold',
  }, 
});
