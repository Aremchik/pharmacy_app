import React from "react";
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';

export const MainPayment = () =>{
    const navigation = useNavigation();
    return(
        <SafeAreaView style={{width: '100%', height: '100%', backgroundColor: 'white'}}>
            <View style={{justifyContent: 'space-between', flexDirection: 'row', marginTop: '2%'}}>
                <TouchableOpacity onPress={() => navigation.navigate('Basket')}>
                <Image style={{marginLeft: '3%'}} source={require('../../UI/img/back.png')}/>
                </TouchableOpacity>
                <Text style={{marginRight: 'auto', marginLeft: '25%', fontWeight: '600', fontSize: 20,}}>Оформление</Text>
            </View>
            <Text style={{fontSize: 16, fontWeight: '600', marginTop: 35, marginLeft: '5%',}}>Личная информация</Text>
            <TextInput style={styles.input} placeholder={'Имя и фамилия'}/>
            <TextInput style={styles.input} placeholder={'Номер телефона'}/>
            <TextInput style={styles.input} placeholder={'Email'}/>
            <Text style={{fontSize: 16, fontWeight: '600', marginTop: 20, marginLeft: '5%',}}>Ваш заказ</Text>

            <View style={{marginLeft: 'auto', marginRight: 'auto', width: '90%', height: 'auto',
            marginTop: 10, backgroundColor: 'rgba(0, 0, 0, 0.03)', borderRadius: 15, padding: 15}}>
                <View style={{justifyContent: 'space-between', flexDirection: 'row',}}>
                    <Image source={require('../../UI/img/time.png')}/>
                    <Text style={{marginRight: 'auto', marginLeft: '5%',}}>Будет собран в течение 20 минут</Text>
                </View>
                <View style={{justifyContent: 'space-between', flexDirection: 'row',}}>
                    <Image source={require('../../UI/img/date.png')}/>
                    <Text style={{marginRight: 'auto', marginLeft: '5%',}}>Можно забрать до 25.12.2022</Text>
                </View>
                <View style={{justifyContent: 'space-between', flexDirection: 'row',}}>
                    <Image source={require('../../UI/img/gp.png')}/>
                    <Text style={{marginRight: 'auto', marginLeft: '5%',}}>Аптека “Здрав сити” </Text>
                </View>
                <Text style={{color: 'rgba(151, 151, 151, 1)', }}>ул. Чайковского 45</Text>
                <Text style={{color: 'rgba(151, 151, 151, 1)', }}>Пн-Вс 08:00-21:00</Text>

                <TouchableOpacity style={{borderRadius: 15, width: '95%', height: 50, marginLeft: 'auto', marginRight: 'auto',
                borderWidth: 1, borderColor: 'rgba(145, 211, 55, 1)', marginTop: 10}}>
                    <Text style={{marginLeft: 'auto', marginRight: 'auto', marginTop: 'auto', marginBottom: 'auto', 
                    color: 'rgba(145, 211, 55, 1)', fontWeight: '500', fontSize: 16,}}>Посмотреть состав заказа</Text>
                </TouchableOpacity>
            </View>
            <View style={{marginLeft:'5%'}}>
                <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 15}}>Способы оплаты</Text>
                <Text style={styles.textOpl}>Оплатить при получении</Text>
                <Text style={styles.textOpl}>Оплатить картой онлайн</Text>
            </View>
            <View style={{marginTop: '5%'}}>
            <View style={{justifyContent: 'space-between', flexDirection: 'row', marginLeft: '5%', marginRight: '5%', marginBottom: '3%'}}>
                <Text style={{fontSize: 18}}>Стоимость заказа:</Text>
                <Text style={{fontSize: 18, color: 'rgba(145, 211, 55, 1)'}}>150 ₽</Text>
            </View>
            <TouchableOpacity style={{borderRadius: 15, width: '95%', height: 50, marginLeft: 'auto', marginRight: 'auto',
                borderWidth: 1, backgroundColor: 'rgba(145, 211, 55, 1)', borderColor: 'rgba(145, 211, 55, 1)'}}>
                <Text style={{marginTop: 'auto', marginBottom: 'auto', marginRight: 'auto', marginLeft: 'auto', 
                color: 'white', fontWeight: 'bold'}}>Оформить заказ</Text>
            </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input:{
        width: '90%',
        height: 50,
        backgroundColor: 'rgba(67, 67, 70, 0.1)',
        borderRadius: 15,
        padding: 15,
        marginLeft: '5%',
        marginTop: 10
    },
    textOpl:{
        fontSize: 14,
        color: '#525252',
        marginTop: '5%'
    }
})