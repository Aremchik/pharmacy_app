import React, { useState } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { MenuBasket } from "../Components/Menu/MenuBasket";
import { useNavigation } from '@react-navigation/native';

export const Basket = () =>{
    const navigation = useNavigation();
    const [quantity, setquantity] = useState(1);
    const [coll, setcoll] = useState(1);
    const price = 150
    const price2 = 215
    return(
        <View style={{width: '100%', height: '100%'}}>
            <Text style={styles.text}>Профиль</Text>
            <TouchableOpacity>
            <Text style={{fontSize: 16, fontWeight: '400', marginTop: 5, marginLeft: 'auto', marginRight: '5%', color: 'rgba(151, 151, 151, 1)',}}>Очистить все</Text>
            </TouchableOpacity>
            <View style={{justifyContent: 'space-between', flexDirection: 'row', marginTop: 39}}>
                <Text style={{marginLeft: '10%',}}>Аптека “Здрав сити”</Text>
                <TouchableOpacity style={{width: 30, height: 30, borderRadius: 5}}>
                    <Image source={require('../UI/img/rename.png')} style={{marginRight: '5%',}}/>
                </TouchableOpacity>
            </View>
            <Text style={{ marginTop: '1%', marginLeft: '10%', color: 'rgba(151, 151, 151, 1)', fontSize: 16}}>ул. Кирочная 45</Text>
            <Text style={{marginLeft: '10%', color: 'rgba(151, 151, 151, 1)', fontSize: 16}}>Пн-Вс 08:00-21:00</Text>
            <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '90%', marginLeft: 'auto', marginRight: 'auto',}}>
                <View>
                    <Image source={require('../UI/img/nurofen.png')}/>
                </View>
                <View>
                <Text>Нурофен</Text>
                <Text>капсулы 400 мг 10 шт</Text>
                <View style={{justifyContent: 'space-between', flexDirection: 'row', marginTop: 15}}>
                    <Text>{price} ₽</Text>
                    <TouchableOpacity onPress={()=> (setquantity(quantity-1))} style={{width: 30, height: 30, backgroundColor: 'rgba(227, 227, 227, 1)', borderRadius: 5}}>
                        <Text style={{marginTop: 'auto', marginLeft: 'auto', marginRight: 'auto', marginBottom: 'auto',}}>-</Text>
                    </TouchableOpacity>
                    <Text>{quantity}</Text>
                    <TouchableOpacity onPress={()=> (setquantity(quantity+1))} style={{width: 30, height: 30, backgroundColor: 'rgba(145, 211, 55, 1)',  borderRadius: 5}}>
                        <Text style={{marginTop: 'auto', marginLeft: 'auto', marginRight: 'auto', marginBottom: 'auto',}}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
            
            </View>
            <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '90%', marginLeft: 'auto', marginRight: 'auto',}}>
                <View>
                    <Image source={require('../UI/img/no-shpa.png')}/>
                </View>
                <View>
                <Text>Но-шпа</Text>
                <Text>80 мг, таблетки, 24 шт.</Text>
                <View style={{justifyContent: 'space-between', flexDirection: 'row', marginTop: 15}}>
                    <Text>{price2} ₽</Text>
                    <TouchableOpacity onPress={()=> (setcoll(coll-1))} style={{width: 30, height: 30, backgroundColor: 'rgba(227, 227, 227, 1)', borderRadius: 5}}>
                        <Text style={{marginTop: 'auto', marginLeft: 'auto', marginRight: 'auto', marginBottom: 'auto',}}>-</Text>
                    </TouchableOpacity>
                    <Text>{coll}</Text>
                    <TouchableOpacity onPress={()=> (setcoll(coll+1))} style={{width: 30, height: 30, backgroundColor: 'rgba(145, 211, 55, 1)',  borderRadius: 5}}>
                        <Text style={{marginTop: 'auto', marginLeft: 'auto', marginRight: 'auto', marginBottom: 'auto',}}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
            
            </View>
            <View style={{justifyContent: 'space-between', flexDirection: 'row', marginTop: 'auto', width: '90%', marginLeft: 'auto', marginRight: 'auto'}}>
                <Text style={{marginLeft:'5%', color: 'black', fontSize: 16 }}>Итого:</Text>
                <Text style={{color: 'rgba(145, 211, 55, 1)', fontSize: 20, fontWeight: '600' }}>{price+price2} ₽</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('MainPayment')}
            style={{width: '90%', height: '8%', backgroundColor: 'rgba(145, 211, 55, 1)', marginRight: 'auto', marginLeft: 'auto',
            borderRadius: 15, marginTop: 'auto',
            }}>
                <Text style={{marginRight: 'auto', marginLeft: 'auto', marginTop: 'auto', marginBottom: 'auto', color: 'white',}}>Перейти к оформлению</Text>
            </TouchableOpacity>
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