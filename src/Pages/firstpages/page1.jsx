import React, { useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Page1 = () => {
    const navigation = useNavigation();
    useEffect(() => {
        checkFirstLogin();
    }, []);
    
      const checkFirstLogin = async () => {
        try {
          // Получаем значение из AsyncStorage
          const isFirstLogin = await AsyncStorage.getItem('isFirstLogin');
    
          if (isFirstLogin === null || isFirstLogin === 'false') {
            // Устанавливаем значение "true", если ранее не было первого входа
            await AsyncStorage.setItem('isFirstLogin', 'true');
    
            // Выполняем необходимую логику для отслеживания первого входа
            navigation.navigate('Page1');
          } else {
            // Если первый вход уже был, выполните соответствующие действия
            navigation.navigate('CityPicker');
          }
        } catch (error) {
          console.error('Ошибка при чтении/записи AsyncStorage:', error);
        }
      };
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonskip} onPress={() => navigation.navigate('CityPicker')}>
                <Text style={styles.textskip}>Пропустить</Text>
            </TouchableOpacity>
            <Text style={[styles.text, styles.hed]}>Онлайн-аптека</Text>
            <Text style={[styles.text, styles.desc]}>Бронируйте и заказывайте лекарства по лучшей цене </Text>
            <Image
                style={styles.img}
                source={require('../../UI/img/imgFirstStart1.png')}
            />
            <TouchableOpacity style={styles.buttoncont} onPress={() => navigation.navigate('Page2')}>
                <Text style={[styles.text, styles.buttonText]}>Далее</Text>
            </TouchableOpacity >
            <StatusBar style="auto" />
        </View>
        )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#859BD4',
    },
    img: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: "8%",
        marginTop: "30%",
    },
    text: {
        color: 'white',
        textAlign: 'center',
    },
    
    hed: {
        marginTop: '10%',
        fontSize: 30,
        fontWeight: 'bold'
    },
    desc: {
        fontSize: 16,
        width: '60%',
        marginLeft: '20%',
    },
    buttoncont: {
        backgroundColor: '#90D337',
        width: '90%',
        height: '8%',
        marginLeft: '5%',
        borderRadius: 10,
        justifyContent: 'center', 
        marginTop: '16%'
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        
    },

    textskip: {
        color: 'white',
        fontSize: 16,
        textAlign: 'right'
    },
    buttonskip: {
        marginTop: '15%',
        marginRight: '8%',
    }
})