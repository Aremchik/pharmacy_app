import React from "react";
import { View, Image, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

export const MainRegister = () =>{
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <View style={{justifyContent: 'space-between', flexDirection: 'row', marginTop: 35}}>
                <Text style={styles.text}>Вход и регистрация</Text>
                <Image style={styles.img} source={require('../../UI/img/logoRegister.png')}/>
            </View>
            <View>
                <Text style={{fontSize: 16, color: 'rgba(151, 151, 151, 1)', marginTop: '10%', marginLeft: '6%', fontWeight: '500',}}>Введите свой номер телефона</Text>
                <TextInput placeholder={'+7'} style={styles.input}/>
                <Text style={{marginLeft: '6%', marginRight: 'auto', color: 'rgba(151, 151, 151, 1)', marginTop: 1, fontSize: 12}}>Мы отправим код подтверждения на указанный вами номер</Text>
            </View>
            <View>
                <TouchableOpacity>
                    <Text style={{marginTop: '90%', color: 'rgba(151, 151, 151, 1)', 
                    marginLeft: 'auto', marginRight: 'auto', fontSize: 16, fontWeight: '500'}}>Пропустить регистрацию</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('SmsCode')}
                style={styles.button}>
                    <Text style={{color: 'white', marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: 'auto',
                    marginBottom: 'auto',}}>Получить код по SMS</Text>
                </TouchableOpacity>
                <TouchableOpacity >
                    <Text style={{width: '90%', color: 'black', textAlign: 'center', fontSize: 14, marginLeft: '4%', marginRight: '4%', marginTop: '3%'}}>
                        Нажимая на кнопку, я даю согласие на обработку персональных данных и подтверждаю, что ознакомлен с политикой конфиденцияльности.
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    },
    text:{
        fontSize: 25,
        fontWeight: '600',
        marginTop: 40,
        marginLeft: '6%',
        marginRight: 'auto',
        color: 'black',
    },
    img:{
        marginTop: 35,
        marginRight: '5%'
    },
    input:{
        width: '90%',
        height: 40,
        marginBottom: '3%',
        marginTop: '3%',
        borderRadius: 10,
        backgroundColor: '#F2F2F2',
        padding: 8,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    button:{
        width: '90%',
        height: 50,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 15,
        borderRadius: 15,
        backgroundColor: 'rgba(145, 211, 55, 1)',
    },
})