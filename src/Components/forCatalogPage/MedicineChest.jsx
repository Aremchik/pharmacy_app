import React from "react";
import { ScrollView, View, TouchableOpacity, StyleSheet, Text, Image } from "react-native";

export const MedicalChest = () => {

    return(
        
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.sectionContainer}>
        <TouchableOpacity key={'1'} style={[styles.button, {backgroundColor: '#6CA1F2'}]}>
          <Text style={styles.buttonText}>От аллергии</Text>
        </TouchableOpacity>
        <TouchableOpacity key={'2'} style={[styles.button, {backgroundColor: '#B9DD52'}]}>
          <Text style={styles.buttonText}>В машину</Text>
        </TouchableOpacity>
        <TouchableOpacity key={'3'} style={[styles.button, {backgroundColor: '#6EC4F4'}]}>
          <Text style={styles.buttonText}>На пляж</Text>
        </TouchableOpacity>
        <TouchableOpacity key={'4'} style={[styles.button, {backgroundColor: '#EE7414'}]}>
          <Text style={styles.buttonText}>От поноса</Text>
        </TouchableOpacity>
    </ScrollView>

        )
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginVertical: 20,
    paddingHorizontal: 10,
    height: 100,
  },
  button: {
    height: 53,
    width: 147,
    borderRadius: 10,
    marginRight: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  img: {
    flex: 1
  },
  buttonText: {
    color: '#FEFEFE',
    fontSize: 14,
    fontWeight: 'bold',
  }, 
});
