import React, { useState } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { Menu } from "../../Components/Menu/Menu";
import { useNavigation } from '@react-navigation/native';

export const OrderHistory = () =>{
    const navigation = useNavigation();
    return(
        <View style={{width: '100%', height: '100%', backgroundColor: '#F5F5F5'}}>
            <View style={{justifyContent: 'space-between', flexDirection: 'row', marginTop: '15%', paddingLeft: '5%'}}>
                <TouchableOpacity onPress={() => navigation.navigate('MainProfile')}>
                    <Image source={require('../../UI/img/back.png')}/>
                </TouchableOpacity>
                <Text style={{marginRight: 'auto', marginLeft: '25%'}}>История заказов</Text>
            </View>

            <View>
                <View style={{justifyContent: 'space-between', flexDirection: 'row', marginTop: 30, backgroundColor: 'rgba(151, 151, 151, 0.2)', marginLeft: 'auto', marginRight: 'auto',
                borderRadius: 15}}>
                    <TouchableOpacity onPress={() => navigation.navigate('OrderHistoryPay')}
                    style={{width: '35%', height: 30, backgroundColor: 'rgba(151, 151, 151, 0.1)', borderRadius: 15,}}>
                        <Text style={{marginRight: 'auto', marginLeft: 'auto', marginTop: 'auto', marginBottom: 'auto', color: 'black', opacity: 0.7}}>Активные</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width: '35%', height: 30, borderWidth: 1, backgroundColor: 'white', borderRadius: 15,}}>
                        <Text style={{marginRight: 'auto', marginLeft: 'auto', marginTop: 'auto', marginBottom: 'auto', color: 'black'}}>Завершенные</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.containerPay}>
                    <Text style={{marginTop: 18, }}>Забрали в пункте выдачи</Text>
                    <Text style={{color: 'rgba(151, 151, 151, 1)', fontSize: 12}}>Забрали 14.12.2022</Text>
                    <Text style={{marginTop: 18}}>Аптека “Здрав сити”</Text>
                    <Text style={{color: 'rgba(151, 151, 151, 1)', fontSize: 12, marginTop: 5}}>ул. Чайковского 45</Text>
                    <Text style={{color: 'rgba(151, 151, 151, 1)', fontSize: 12, marginTop: 5}}>Пн-Вс 08:00-21:00</Text>
                    <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '90%', marginLeft: '5%',}}>
                        <TouchableOpacity>
                            <Text style={{color: 'rgba(145, 211, 55, 1)', marginTop: '10%'}}>Повторить заказ</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.containerPay}>
                    <Text style={{marginTop: 18, }}>Забрали в пункте выдачи</Text>
                    <Text style={{color: 'rgba(151, 151, 151, 1)', fontSize: 12}}>Забрали 14.12.2022</Text>
                    <Text style={{marginTop: 18}}>Аптека “Здрав сити”</Text>
                    <Text style={{color: 'rgba(151, 151, 151, 1)', fontSize: 12, marginTop: 5}}>ул. Чайковского 45</Text>
                    <Text style={{color: 'rgba(151, 151, 151, 1)', fontSize: 12, marginTop: 5}}>Пн-Вс 08:00-21:00</Text>
                    <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '90%', marginLeft: '5%',}}>
                        <TouchableOpacity>
                            <Text style={{color: 'rgba(145, 211, 55, 1)', marginTop: '10%'}}>Повторить заказ</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                    
            </View>

            <Menu/>
        </View>
    )
}

const styles = StyleSheet.create({
    containerPay:{
        width: 320,
        height: 190,
        backgroundColor: 'white',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '5%',
        borderRadius: 15,
        paddingLeft: 15,
        paddingTop: 5,
    }
})