import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, Modal } from "react-native";


export const Order = ({modal,setmodal}) =>{
    return(
        <View>
            <View style={styles.containerPay}>
                    <Text style={{marginTop: 18, }}>Готов к выдачи</Text>
                    <Text style={{color: 'rgba(151, 151, 151, 1)', fontSize: 12}}>Можно забрать до 25.12.2022</Text>
                    <Text style={{marginTop: 18}}>Аптека “Здрав сити”</Text>
                    <Text style={{color: 'rgba(151, 151, 151, 1)', fontSize: 12, marginTop: 5}}>ул. Чайковского 45</Text>
                    <Text style={{color: 'rgba(151, 151, 151, 1)', fontSize: 12, marginTop: 5}}>Пн-Вс 08:00-21:00</Text>
                    <View style={{ marginTop: 10, justifyContent: 'space-between', flexDirection: 'row', width: '90%', marginLeft: '5%',}}>
                        <TouchableOpacity>
                            <Text style={{color: 'rgba(145, 211, 55, 1)'}}>Получить по штрихкоду</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=> {setmodal(!modal)}}>
                            <Text style={{color: 'red'}}>Отказаться</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.containerPay}>
                    <Text style={{marginTop: 18, }}>Готов к выдачи</Text>
                    <Text style={{color: 'rgba(151, 151, 151, 1)', fontSize: 12}}>Можно забрать до 25.12.2022</Text>
                    <Text style={{marginTop: 18}}>Аптека “Здрав сити”</Text>
                    <Text style={{color: 'rgba(151, 151, 151, 1)', fontSize: 12, marginTop: 5}}>ул. Чайковского 45</Text>
                    <Text style={{color: 'rgba(151, 151, 151, 1)', fontSize: 12, marginTop: 5}}>Пн-Вс 08:00-21:00</Text>
                    <View style={{marginTop: 10, justifyContent: 'space-between', flexDirection: 'row', width: '90%', marginLeft: '5%',}}>
                        <TouchableOpacity>
                            <Text style={{color: 'rgba(145, 211, 55, 1)', marginTop: '10%'}}>Получить по штрихкоду</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=> {setmodal(!modal)}}>
                            <Text style={{color: 'red', marginTop: '10%'}}>Отказаться</Text>
                        </TouchableOpacity>
                    </View>
                </View>
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