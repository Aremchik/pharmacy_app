import React from "react";
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

export const Page2 = () => {
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonskip} onPress={() => navigation.navigate('CityPicker')}>
                <Text style={styles.textskip}>Пропустить</Text>
            </TouchableOpacity>
            <Text style={[styles.text, styles.hed]}>Что такое электронный рецепт?</Text>
            <Text style={[styles.text, styles.desc]}>Это аналог бумажного назначения врача, имеющий с ним равную юридическую силу.</Text>
            <Image
                style={styles.img}
                source={require('../../UI/img/imgFirstStart2.png')}
            />
            <TouchableOpacity style={styles.buttoncont} onPress={() => navigation.navigate('Page3')}>
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
        marginLeft: "20%",
        marginTop: "2%",
    },
    text: {
        color: 'white',
        textAlign: 'center',
    },
    
    hed: {
        marginTop: '4%',
        fontSize: 30,
        fontWeight: 'bold'
    },
    desc: {
        fontSize: 16,
        width: '70%',
        marginLeft: '15%',
    },
    buttoncont: {
        backgroundColor: '#90D337',
        width: '90%',
        height: '8%',
        marginLeft: '5%',
        borderRadius: 10,
        justifyContent: 'center', 
        marginTop: '3%'
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
        marginTop: '10%',
        marginRight: '8%',
    }
})