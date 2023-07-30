import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { MenuLove } from "../Components/Menu/MenuLove";


export const Love = () =>{

    return(
        <View style={{width: '100%', height: '100%'}}>
            <Text style={styles.text}>Избранное</Text>
            <TouchableOpacity>
            <Text style={{fontSize: 16, fontWeight: '400', marginTop: 5, marginLeft: 'auto', marginRight: '5%', color: 'rgba(151, 151, 151, 1)',}}>Очистить все</Text>
            </TouchableOpacity>

            <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '80%', marginLeft: 'auto', marginRight: 'auto',}}>
                <View>
                    <Image source={require('../UI/img/no-shpa.png')}/>
                </View>
                <View>
                    <View style={{justifyContent: 'space-between', flexDirection: 'row', marginRight: '30%', marginTop: '3%'}}>
                        <Text>Air Optix Aqua</Text>
                        <Image source={require('../UI/img/lovePng.png')}/>
                    </View>
                <Text style={{width: '50%', color: 'rgba(151, 151, 151, 1)', }}>контактные линзы на месяц 2.00 6шт</Text>
                <Text>2.259 ₽</Text>
                <View style={{justifyContent: 'space-between', flexDirection: 'row', marginTop: 15}}>
                    <Text>от 599 ₽</Text>
                    <Text style={{marginRight: '30%', color: 'rgba(238, 116, 20, 1)'}}>по рецепту</Text>
                </View>
            </View>
            </View>
            <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '80%', marginLeft: 'auto', marginRight: 'auto', marginTop: '5%',}}>
                <View>
                    <Image source={require('../UI/img/no-shpa.png')}/>
                </View>
                <View>
                    <View style={{justifyContent: 'space-between', flexDirection: 'row', marginRight: '30%', marginTop: '3%'}}>
                        <Text>Air Optix Aqua</Text>
                        <Image source={require('../UI/img/lovePng.png')}/>
                    </View>
                <Text style={{width: '50%', color: 'rgba(151, 151, 151, 1)', }}>контактные линзы на месяц 2.00 6шт</Text>
                <Text>2.259 ₽</Text>
                <View style={{justifyContent: 'space-between', flexDirection: 'row', marginTop: 15}}>
                    <Text>от 599 ₽</Text>
                    <Text style={{marginRight: '30%', color: 'rgba(238, 116, 20, 1)'}}>по рецепту</Text>
                </View>
            </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        fontSize: 20,
        fontWeight: '500',
        marginTop: 40,
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'black',
    },
})