import React, { useState } from 'react';
import { Image, TouchableOpacity, View, Text, TextInput, ScrollView, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const LoveScreen = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  
  const data = [
    {
      id: '1',
      title: 'Нош-па',
      price: '2259 ₽',
      description: '80 мг, таблетки, 24 шт.',
      recipe: 'По рецепту' 
    },
    {
        id: '2',
        title: 'Нош-па',
        price: 'от 120',
        description: '80 мг, таблетки, 24 шт.',
        recipe: 'По рецепту' 
      },
      {
        id: '3',
        title: 'Нош-па',
        price: '2259 ₽',
        description: '80 мг, таблетки, 24 шт.',
        recipe: 'По рецепту' 
      },
      {
        id: '4',
        title: 'Нош-па',
        price: 'от 120',
        description: '80 мг, таблетки, 24 шт.',
        recipe: 'По рецепту' 
      },
      {
        id: '5',
        title: 'Нош-па',
        price: 'от 120',
        description: '80 мг, таблетки, 24 шт.',
        recipe: 'По рецепту' 
      },
  ];
  
  const renderItem = ({ item }) => (
    <View style={styles.buttonContainer}>
        <TouchableOpacity style={{flexDirection: 'row'}}>
            <Image  
                    style={styles.img}
                    source={require('../UI/img/Popular.png')}
            />
            <View>
                <View style={{flexDirection: 'row'}}>
                    <View>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.description}>{item.description}</Text>
                    </View>
                    <Image 
                        style={{marginLeft: 40, marginTop: 6}}
                        source={require('../UI/img/lovePng.png')}
                    />
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 15}}>
                    <Text style={styles.price}>{item.price}</Text>
                    <Text style={styles.recipe}>{item.recipe}</Text>
                </View>
            </View>
        </TouchableOpacity>
    </View>
    );

    return (
        
        <View style={styles.container}>

            <View style={{flexDirection: 'row', marginBottom: 20}}>
                <Text  style={styles.texthead}>Избранное</Text>
                <TouchableOpacity onPress={() => navigation.navigate('CatalogScreen')}>
                    <Text style={{fontSize: 12, marginTop: 9, marginLeft: 30, color: '#979797'}}>Очистить все</Text>
                </TouchableOpacity>
            </View>
           
            <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            />
        </View>
    );

};

styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '10%',
        paddingBottom: '5%',
        backgroundColor: 'white'
    },
    recipe:{
        color: '#EE7414',
        fontSize: 12,
        fontWeight: 'bold',
        marginTop: 5,
        marginLeft: 60,
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    img:{
        width: 136,
        height: 70,
        marginRight: 10
    },
    texthead:{
        
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: '28%',
    },
    title:{
        marginTop: 2,
        fontSize: 18,
        fontWeight: 'bold'
    },
    description: {
        color: '#979797',
        fontSize: 12,
        marginTop: 2
    },
    input: {
        width: '90%',
        height: 40,
        marginBottom: '3%',
        marginTop: '3%',
        borderRadius: 10,
        backgroundColor: '#F2F2F2',
    },
    buttonContainer: {
        borderColor: '#dbdbdb',
        borderRadius: 10,
        borderWidth: 1,
        height: 104,
        width: 358,
        paddingVertical: 10,
        marginBottom: 10,
    },
    button: {
        height: 42,
        borderRadius: 10,
        marginRight: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#F2F2F2'
    },
    sectionContainer: {
        paddingHorizontal: 15,
        marginTop: 15,
        marginBottom: 20
      },
    buttonText:{
        fontSize: 14,
        color: '#525252'
    }
})