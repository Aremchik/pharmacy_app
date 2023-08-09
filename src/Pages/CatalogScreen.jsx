import React, { useState, useEffect } from 'react';
import { View, ScrollView, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { PopularProduct } from '../Components/forCatalogPage/PopularProduct';
import { Sections } from '../Components/forCatalogPage/Sections';
import { Helpful } from '../Components/forCatalogPage/Helpful';
import { MedicalChest } from '../Components/forCatalogPage/MedicineChest';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export const CatalogScreen = () => {
  const navigation = useNavigation();
  const [City, setCity] = useState([]); 
  const LoadCity = async() =>{
    setCity(await AsyncStorage.getItem('City'))
    console.log(City);
  }
  useEffect(() => {
    LoadCity()
  });
  return (
    <View style={{backgroundColor: 'white'}}>
    <ScrollView style={styles.container}>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={styles.textContainer} onPress={() => navigation.navigate('CityPicker')}>
          <Text style={[styles.text, styles.cityText]}>{City}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={[styles.text, styles.allAptekText]}>Все аптеки</Text>
        </TouchableOpacity>
      </View>

      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity activeOpacity={1} style={styles.input} onPress={()=>navigation.navigate('Search')}>
          <Text style={{color: '#979797', marginLeft: '3%'}}>Введите название лекарства или симптомов</Text>  
          <Image source={require('../UI/img/loupe.png')}/>
        </TouchableOpacity>
      </View>

      <Sections/>

      <View style={{flexDirection: 'row'}}>
        <View style={styles.textContainer}>
          <Text style={styles.headText}>Популярные товары</Text>
        </View>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={[styles.text, styles.allAptekText]}>Все</Text>
        </TouchableOpacity>
      </View>

      <PopularProduct/>

      <View style={{flexDirection: 'row'}}>
        <View style={styles.textContainer}>
          <Text style={styles.headText}>Может быть полезно</Text>
        </View>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={[styles.text, styles.allAptekText]}>Показать еще</Text>
        </TouchableOpacity>
      </View>

      <Helpful/>

      <View style={styles.textContainer}>
        <Text style={styles.headText}>Аптечки</Text>
      </View>

      <MedicalChest/> 
    </ScrollView>
    </View>
   
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    backgroundColor: 'white',
  },
  input: {
    flexDirection:'row',
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    marginTop: 15,
    borderRadius: 10,
    backgroundColor: '#F2F2F2',
  },
  text: {
    fontSize: 14
  },
  cityText: {
    color: '#91D337'
  },
  textContainer: {
    flex: 1,
    marginLeft: 15
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 15
  },
  allAptekText: {
    color: '#979797',
  },
  headText:{
    fontSize: 16,
    fontWeight: 'bold',
    color: '#313133'
  }
});
