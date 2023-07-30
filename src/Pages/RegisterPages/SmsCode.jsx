import React from "react";
import { View, Image, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

export const SmsCode = () =>{
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <View style={{justifyContent: 'space-between', flexDirection: 'row', marginTop: 35}}>
                <Text style={styles.text}>Вход и регистрация</Text>
                <Image style={styles.img} source={require('../../UI/img/logoRegister.png')}/>
            </View>
            <View>
                <Text style={{fontSize: 16, color: 'black', marginTop: '10%', marginLeft: 'auto', marginRight: 'auto', fontWeight: '500',}}>Мы отправили код по номеру</Text>
                <View style={{justifyContent: 'space-between', flexDirection: 'row', marginLeft: 'auto', marginRight: 'auto',}}>
                    <TextInput placeholder={''} style={styles.input}/>
                    <TextInput placeholder={''} style={styles.input}/>
                    <TextInput placeholder={''} style={styles.input}/>
                    <TextInput placeholder={''} style={styles.input}/>
                </View>
                <Text style={{marginLeft: 'auto', marginRight: 'auto', color: 'rgba(151, 151, 151, 1)', marginTop: 1, fontSize: 14}}>Получить новый код можно через 0:20</Text>
            </View>
            <View>
                <TouchableOpacity>
                    <Text style={{marginTop: '90%', color: 'rgba(151, 151, 151, 1)', 
                    marginLeft: 'auto', marginRight: 'auto', fontSize: 16, fontWeight: '500'}}>Пропустить регистрацию</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('CatalogScreen')}
                style={styles.button}>
                    <Text style={{color: 'white', marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: 'auto',
                    marginBottom: 'auto',}}>Продолжить</Text>
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
        width: 40,
        height: 40,
        borderWidth: 1,
        color: 'black',
        backgroundColor: 'rgba(242, 242, 242, 1)',
        marginRight: '5%',
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