import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const CityPicker = () => {
    const navigation = useNavigation();
    const [searchText, setSearchText] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [cityList, setCityList] = useState([
        'г. Уфа',
        'г. Москва',
        'г. Питер',
        'г. Челябинск',
        'г. Сибай',
        'г. Сочи',
        'г. Омск',
        'г. Мурманск',
        'г. Владимир',
        'г. Сибирь',
        'г. Екатеринбург',
        'г. Пенза',
    ]);
    const [filteredCities, setFilteredCities] = useState([]);

    useEffect(() => {
        filterCities();
    }, [searchText]);

    const filterCities = () => {
        const filtered = cityList.filter(city =>
        city.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredCities(filtered);
    };

    const handleCitySelection = city => {
        setSelectedCity(city);
    };
    
    const handleChooseCity = async () => {
        await AsyncStorage.setItem('City', selectedCity ? selectedCity : 'Город не выбран');
    };
    
    return (
        <View style={styles.container}>
        <Text style={styles.texthead}>Выбор города</Text>
        <View style={styles.input}>
            <TextInput
                placeholder="Введите название города"
                value={searchText}
                onChangeText={setSearchText}
            /> 
            <Image style={{marginLeft:2}} source={require('../UI/img/loupe.png')}/>
        </View>
        <FlatList
            showsVerticalScrollIndicator={false}
            style={styles.cityList}
            data={filteredCities}
            renderItem={({ item }) => (
            <TouchableOpacity
                style={[
                styles.cityItem,
                item === selectedCity,
                ]}
                onPress={() => handleCitySelection(item)}
            >
                <Text style={item === selectedCity ? styles.selectedCityText : null}>{item}</Text>
            </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
            extraData={selectedCity}
            
        />
        
        <TouchableOpacity style={styles.chooseButton} onPress={() => {{navigation.navigate('Menu')}{handleChooseCity()}}}>
            <Text style={styles.buttonText}>Выбрать</Text>
        </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: '10%',
        backgroundColor: 'white'
    },
    texthead:{
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    input: {
        width: '90%',
        height: 40,
        marginBottom: '3%',
        marginTop: '3%',
        borderRadius: 10,
        backgroundColor: '#F2F2F2',
        alignItems: 'center',
        flexDirection: 'row',
        padding: '3%',
        justifyContent: 'space-between'
    },
    cityList: {
        width: '85%',
        marginTop: 10,
    },
    cityItem: {
        fontSize: 16,
        paddingVertical: 16,
    },
    selectedCityItem: {
        backgroundColor: '#91D337',
    },
    selectedCityText: {
     color: '#91D337',
     fontSize: 16,
    },
    chooseButton: {
        backgroundColor: '#91D337',
        width: '90%',
        height: '8%',
        marginLeft: '5%',
        borderRadius: 10,
        justifyContent: 'center', 
        marginTop: '3%'
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold'
    },
});

export default CityPicker;
