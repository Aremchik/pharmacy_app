import React from "react";
import { ScrollView, View, TouchableOpacity, StyleSheet, Text, Image } from "react-native";

export const Helpful = () => {

    return(
        
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.sectionContainer}>
        <TouchableOpacity key={'1'} style={styles.button}>
          <Image
              style={styles.img}
              source={require('../../UI/img/Cards/image179.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity key={'2'} style={styles.button}>
          <Image
              style={styles.img}
              source={require('../../UI/img/Cards/image179.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity key={'3'} style={styles.button}>
          <Image
              style={styles.img}
              source={require('../../UI/img/Cards/image179.png')}
          />
        </TouchableOpacity>
        
    </ScrollView>

        )
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginVertical: 20,
    paddingHorizontal: 10,
    height: 190,
  },
  button: {
    flexDirection: 'row',
  },
  img: {
    flex: 1
  },
  buttonText: {
    color: '#232324',
    fontSize: 16,
    fontWeight: 'bold',
  }, 
});
