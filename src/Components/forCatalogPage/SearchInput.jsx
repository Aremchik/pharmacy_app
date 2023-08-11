import React, { useState } from 'react';
import { Image, TouchableOpacity, View, Text, TextInput, ScrollView, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GreenLoveSvg } from '../../UI/svg/GreenLoveSvg';

export const SearchInput = () => {

  const allData = [
    { 
      id: '1',
      title: 'Нош-па',
      price: 'от 120',
      description: '80 мг, таблетки, 24 шт.',
      recipe: 'По рецепту',
      category: 'Боль, температура'
    },
    {
        id: '2',
        title: 'Нош-па',
        price: 'от 120',
        description: '80 мг, таблетки, 24 шт.',
        recipe: 'По рецепту',
        category: 'Боль, температура'
      },
      {
        id: '3',
        title: 'Нош-па',
        price: 'от 120',
        description: '80 мг, таблетки, 24 шт.',
        recipe: 'По рецепту',
        category: 'Ухо, горло, нос'
      },
      {
        id: '4',
        title: 'Нош-па',
        price: 'от 120',
        description: '80 мг, таблетки, 24 шт.',
        recipe: 'По рецепту',
        category: 'Аллергия'
      },
      {
        id: '5',
        title: 'Нош-па',
        price: 'от 120',
        description: '80 мг, таблетки, 24 шт.',
        recipe: 'По рецепту',
        category: 'Аллергия'
      },
      {
        id: '6',
        title: 'Нош-па',
        price: 'от 120',
        description: '80 мг, таблетки, 24 шт.',
        recipe: 'По рецепту',
        category: 'Аллергия'
      },
      {
        id: '7',
        title: 'Нош-па',
        price: 'от 120',
        description: '80 мг, таблетки, 24 шт.',
        recipe: 'По рецепту',
        category: 'Аллергия'
      },
      {
        id: '8',
        title: 'Нош-па',
        price: 'от 120',
        description: '80 мг, таблетки, 24 шт.',
        recipe: 'По рецепту',
        category: 'Аллергия'
      },
  ]

  const navigation = useNavigation()
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedOptions, setSelectedOptions] = useState([]);

      const handleOptionPress = (option) => {
        if (selectedOptions.includes(option)) {
          setSelectedOptions(selectedOptions.filter((item) => item !== option));
        } else {
          setSelectedOptions([...selectedOptions, option]);
        }
      };
    
      const isOptionSelected = (option) => {
        return selectedOptions.includes(option);
      };
    
      const getOptionTextStyle = (option) => {
        return isOptionSelected(option) ? '#91D337'  : '#fff' ;
      };
  
  const handleButtonPress = (category) => {
    setSelectedCategory(category)
  };

  const filteredData = selectedCategory
    ? allData.filter((item) => item.category.includes(selectedCategory)) : allData

  const renderItem = ({ item }) => (
    <View style={styles.buttonContainer}>
        <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => navigation.navigate('ProductSreen')}>
            <Image  
                    style={styles.img}
                    source={require('../../UI/img/Popular.png')}
            />
            <View>
                <View style={{flexDirection: 'row'}}>
                    
                    <View>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.description}>{item.description}</Text>
                    </View>
                    
                    <View style={{marginLeft: 40, marginTop: 6}}>
                    <TouchableOpacity  style={[selectedOptions.includes(item.id)]} onPress={() => handleOptionPress(item.id)}>
                        <GreenLoveSvg color={getOptionTextStyle(item.id)}/>
                    </TouchableOpacity>
                    </View>
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

            <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%',}}>
                <TouchableOpacity onPress={() => navigation.navigate('CatalogScreen')}>
                    <Image
                    style={{marginLeft: '10%',}}
                        source={require('../../UI/img/back.png')}
                    />
                </TouchableOpacity>
                <Text  style={styles.texthead}>Каталог</Text>
            </View>
            <View style={styles.input}>
                <TextInput
                    onChangeText={setSearch}
                    value={search}
                    placeholder="Введите название лекарства или симптомов"
                />
                <Image style={{marginLeft:2}}source={require('../../UI/img/loupe.png')}/>
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.sectionContainer}>
            <TouchableOpacity
                style={[styles.button,
                    { backgroundColor: selectedCategory === null ? '#91D337' : '#F2F2F2' },]}
                onPress={() => handleButtonPress(null)}>
            <Text style={[styles.buttonText, {color: selectedCategory == null ? 'white' : '#525252'}]}>Все</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.button,
                    { backgroundColor: selectedCategory === 'Аллергия' ? '#91D337' : '#F2F2F2' },
                ]}
                onPress={() => handleButtonPress('Аллергия')}>
                <Text style={[styles.buttonText, {color: selectedCategory == 'Аллергия' ? 'white' : '#525252'}]}>Аллергия</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
                style={[styles.button,
                    { backgroundColor: selectedCategory === 'Боль, температура' ? '#91D337' : '#F2F2F2' },
                ]}
                onPress={() => handleButtonPress('Боль, температура')}>
                <Text style={[styles.buttonText, {color: selectedCategory == 'Боль, температура' ? 'white' : '#525252'}]}>Боль, температура</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
                style={[styles.button,
                    { backgroundColor: selectedCategory === 'Ухо, горло, нос' ? '#91D337' : '#F2F2F2' },
                ]}
                onPress={() => handleButtonPress('Ухо, горло, нос')}>
                <Text style={[styles.buttonText, {color: selectedCategory == 'Ухо, горло, нос' ? 'white' : '#525252'}]}>Ухо, горло, нос</Text>
            </TouchableOpacity>

            </ScrollView>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={filteredData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{flexGrow: 1}}
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
        marginLeft: 60
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
        marginRight: '40%',
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
        flexDirection:'row',
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        marginTop: 15,
        borderRadius: 10,
        backgroundColor: '#F2F2F2',
        paddingLeft: '3%'
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
        marginBottom: 20,
        height: 60
      },
    buttonText:{
        fontSize: 14,
       
    },
})