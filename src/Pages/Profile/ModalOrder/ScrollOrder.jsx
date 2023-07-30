import React from "react";
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from "react-native";
export const ScrollOrder = () =>{
    return(
        <View style={{width: '100%', marginTop: 10,}}>
                <ScrollView horizontal={true} >
                    <View style={styles.containerPay}>
                        <Text style={{marginTop: 18, }}>Доставлено в пункт выдачи</Text>
                        <Text style={{color: 'rgba(151, 151, 151, 1)', fontSize: 12, marginTop: 5}}>Можно забрать до 25.12.2022</Text>
                        <Text style={{marginTop: 18}}>Аптека “Здрав сити”</Text>
                        <Text style={{color: 'rgba(151, 151, 151, 1)', fontSize: 12, marginTop: 5}}>ул. Чайковского 45</Text>
                        <Text style={{color: 'rgba(151, 151, 151, 1)', fontSize: 12, marginTop: 5}}>Пн-Вс 08:00-21:00</Text>
                        <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '90%', marginLeft: '5%',}}>
                            <TouchableOpacity>
                                <Text style={{color: 'rgba(145, 211, 55, 1)'}}>Подробнее</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={{color: 'red', fontSize: 14, fontWeight: '500',}}>Отменить</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.containerPay}>
                        <Text style={{marginTop: 18, }}>Доставлено в пункт выдачи</Text>
                        <Text style={{color: 'rgba(151, 151, 151, 1)', fontSize: 12, marginTop: 5}}>Можно забрать до 25.12.2022</Text>
                        <Text style={{marginTop: 18}}>Аптека “Здрав сити”</Text>
                        <Text style={{color: 'rgba(151, 151, 151, 1)', fontSize: 12, marginTop: 5}}>ул. Чайковского 45</Text>
                        <Text style={{color: 'rgba(151, 151, 151, 1)', fontSize: 12, marginTop: 5}}>Пн-Вс 08:00-21:00</Text>
                        <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '90%', marginLeft: '5%',}}>
                            <TouchableOpacity>
                                <Text style={{color: 'rgba(145, 211, 55, 1)'}}>Подробнее</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={{color: 'red', fontSize: 14, fontWeight: '500',}}>Отменить</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.containerPay}>
                        <Text style={{marginTop: 18, }}>Доставлено в пункт выдачи</Text>
                        <Text style={{color: 'rgba(151, 151, 151, 1)', fontSize: 12, marginTop: 5}}>Можно забрать до 25.12.2022</Text>
                        <Text style={{marginTop: 18}}>Аптека “Здрав сити”</Text>
                        <Text style={{color: 'rgba(151, 151, 151, 1)', fontSize: 12, marginTop: 5}}>ул. Чайковского 45</Text>
                        <Text style={{color: 'rgba(151, 151, 151, 1)', fontSize: 12, marginTop: 5}}>Пн-Вс 08:00-21:00</Text>
                        <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '90%', marginLeft: '5%',}}>
                            <TouchableOpacity>
                                <Text style={{color: 'rgba(145, 211, 55, 1)'}}>Подробнее</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={{color: 'red', fontSize: 14, fontWeight: '500',}}>Отменить</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.containerPay}>
                        <Text style={{marginTop: 18, }}>Доставлено в пункт выдачи</Text>
                        <Text style={{color: 'rgba(151, 151, 151, 1)', fontSize: 12, marginTop: 5}}>Можно забрать до 25.12.2022</Text>
                        <Text style={{marginTop: 18}}>Аптека “Здрав сити”</Text>
                        <Text style={{color: 'rgba(151, 151, 151, 1)', fontSize: 12, marginTop: 5}}>ул. Чайковского 45</Text>
                        <Text style={{color: 'rgba(151, 151, 151, 1)', fontSize: 12, marginTop: 5}}>Пн-Вс 08:00-21:00</Text>
                        <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '90%', marginLeft: '5%',}}>
                            <TouchableOpacity>
                                <Text style={{color: 'rgba(145, 211, 55, 1)'}}>Подробнее</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={{color: 'red', fontSize: 14, fontWeight: '500',}}>Отменить</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
    )
}

const styles = StyleSheet.create({
    text:{
        fontSize: 30,
        fontWeight: '500',
        marginTop: 40,
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'black',
    },
    containerPay:{
        width: 320,
        height: 190,
        backgroundColor: 'white',
        marginLeft: 6.5,
        marginRight: 6.5,
        borderRadius: 15,
        padding: 20
    }
})