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
                <Text style={{fontSize: 16, color: 'rgba(151, 151, 151, 1)', marginTop: '10%', marginLeft: '10%', fontWeight: '500',}}>Введите свой номер телефона</Text>
                <TextInput placeholder={'+7'} style={styles.input}/>
                <Text style={{marginLeft: '10%', marginRight: 'auto', color: 'rgba(151, 151, 151, 1)', marginTop: 1, fontSize: 14}}>Мы отправим код подтверждения на указанный вами номер</Text>
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
                    <Text style={{width: '80%', color: 'black', fontSize: 14, fontWeight: '400', marginLeft: 'auto', marginRight: 'auto', marginTop: '5%'}}>
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
    },
    text:{
        fontSize: 25,
        fontWeight: '600',
        marginTop: 40,
        marginLeft: '10%',
        marginRight: 'auto',
        color: 'black',
    },
    img:{
        marginTop: 35,
        marginRight: '5%'
    },
    input:{
        width: '80%',
        height: 40,
        borderWidth: 1,
        color: 'black',
        backgroundColor: 'rgba(242, 242, 242, 1)',
        marginLeft: '10%',
        marginTop: 'auto',
        marginBottom: 'auto',
        borderRadius: 15,
        paddingLeft: 15,
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