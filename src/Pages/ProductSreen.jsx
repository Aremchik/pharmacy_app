import React, { useState, useEffect } from 'react';
import { Animated, View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { PopularProduct } from "../Components/forCatalogPage/PopularProduct";
import { ExpandableView } from '../Components/ExpandableView';
import { useNavigation } from '@react-navigation/native';
import { GreenLoveSvg } from '../UI/svg/GreenLoveSvg';

export const ProductSreen = () =>{
    const navigation = useNavigation();
    const [isExpanded,setIsExpanded] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [isPressed, setIsPressed] = useState(false);

    const handlePress = () => {
        setIsPressed(!isPressed);
    };
  
    const handleButtonPress = (category) => {
        setSelectedCategory(category)
    };

    return(
        <ScrollView style={styles.container}>
            <View style={{flexDirection: 'row', marginTop: 5}}>
                <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                    <Image
                    style={{marginLeft: '10%',}}
                        source={require('../UI/img/back.png')}
                    />
                </TouchableOpacity>
                <Text style={styles.headText}>Но-шпа</Text>
                <View style={{marginLeft: 95, marginTop: 3}}>
                    <TouchableOpacity onPress={handlePress}>
                    <GreenLoveSvg color={isPressed ? '#91D337' : '#fff'}/>
                    </TouchableOpacity>
                    </View>
            </View>
            <View style={{alignItems: 'center'}}>
                <Image
                    
                    source={require('../UI/img/Product.png')}
                />
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.title}>Но-шпа</Text>
                <Text style={styles.price}>от 150 ₽</Text> 
            </View>
            <Text style={styles.descr}>80 мг, таблетки, 24 шт</Text>
            <Text style={styles.production}>Сhinoin Pharmaceutical and Chemical Works Венгрия</Text>
            <Text style={styles.blockName}>Количество</Text>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.sectionContainer}>

                <TouchableOpacity
                    style={[styles.button,
                        { borderColor: selectedCategory === '80мг, 24шт' ? '#91D337' : '#E3E3E3' },
                    ]}
                    onPress={() => handleButtonPress('80мг, 24шт')}>
                    <Text style={{color: '#525252'}}>80мг, 24шт</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                    style={[styles.button,
                        { borderColor: selectedCategory === '40мг+500мг, 12шт' ? '#91D337' : '#E3E3E3' },
                    ]}
                    onPress={() => handleButtonPress('40мг+500мг, 12шт')}>
                    <Text style={{color: '#525252'}}>40мг+500мг, 12шт</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                    style={[styles.button,
                        { borderColor: selectedCategory === '40мг, 60шт' ? '#91D337' : '#E3E3E3' },
                    ]}
                    onPress={() => handleButtonPress('40мг, 60шт')}>
                    <Text style={{color: '#525252'}}>40мг, 60шт</Text>
                </TouchableOpacity>

            </ScrollView>

            <Text style={styles.blockName}>Аналоги</Text>
            <PopularProduct/>
            <Text style={[styles.blockName, {marginBottom: 10}]}>Форма выпуска</Text>
            <TouchableOpacity activeOpacity={1} style={styles.drop} onPress={() => {setIsExpanded(!isExpanded);}}>  
                <Text style={{fontSize: 16}}>Состав</Text>
            </TouchableOpacity>
            <ExpandableView expanded={!isExpanded}/>
            <TouchableOpacity style={styles.chooseButton}>
                <Text style={styles.buttonText}>Выбрать</Text>
            </TouchableOpacity>
        </ScrollView>
        )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingVertical: 30,
        paddingHorizontal: 15,
        backgroundColor: 'white',
    },
    headText:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#313133',
        marginLeft: 85
      },
    title:{
        fontSize: 25,
        fontWeight: 'bold',
        color: '#313133',
    },
    price:{
        fontWeight: 'bold',
        fontSize: 20,
        color: '#91D337'
    },
    descr:{
        color: '#525252',
        fontSize: 16,
        marginTop: 10
    },
    production:{
        color: '#979797',
        fontSize: 16,
        marginTop: 10
    },
    blockName:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#313133',
        marginTop: 15
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
        borderWidth: 2,
        height: 42,
        borderRadius: 10,
        marginRight: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    sectionContainer: {
        paddingHorizontal: 15,
        marginTop: 15,
        marginBottom: 20,
        height: 50
      },
    drop:{
        backgroundColor: '#F2F2F2',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        padding: 10
    },
    chooseButton: {
        backgroundColor: '#91D337',
        width: '90%',
        height: 60,
        marginLeft: '5%',
        borderRadius: 10,
        justifyContent: 'center', 
        marginTop: '3%',
        marginBottom: 50,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold'
    },
})