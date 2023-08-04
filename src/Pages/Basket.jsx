import React, { useState } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

export const Basket = () =>{
    const navigation = useNavigation();
    const [quantity, setquantity] = useState(1);
    const [coll, setcoll] = useState(1);
    const price = 150
    const price2 = 215
    return(
        <View style={{width: '100%', height: '100%', backgroundColor: 'white'}}>
            <View style={{justifyContent: 'space-between', flexDirection: 'row', marginTop: 40}}>
                <Text style={styles.text}>Корзина</Text>
                <TouchableOpacity>
                <Text style={{fontSize: 12, marginTop: 9, marginRight: 18, color: '#979797'}}>Очистить все</Text>
                </TouchableOpacity>
            </View>
            <View style={{justifyContent: 'space-between', flexDirection: 'row', marginTop: 39}}>
                <Text style={{marginLeft: '6%', fontWeight: 'bold', fontSize: 16}}>Аптека “Здрав сити”</Text>
                <TouchableOpacity style={{width: 30, height: 30, borderRadius: 5}}>
                    <Image source={require('../UI/img/rename.png')} style={{marginRight: '5%',}}/>
                </TouchableOpacity>
            </View>
            <Text style={{ marginTop: '1%', marginLeft: '6%', color: 'rgba(151, 151, 151, 1)', fontSize: 16}}>ул. Кирочная 45</Text>
            <Text style={{marginLeft: '6%', color: 'rgba(151, 151, 151, 1)', fontSize: 16, marginBottom: '4%'}}>Пн-Вс 08:00-21:00</Text>
            <View style={{flexDirection: 'row', width: '90%', marginLeft: 'auto', marginRight: 'auto', padding: '3%',
            borderColor: '#dbdbdb',
            borderRadius: 10,
            borderWidth: 1,
            height: 104,
            width: 358,
            paddingVertical: 10,
            marginBottom: 10,
            }}>
                <View>
                    <Image style={{marginBottom: 'auto', marginTop: 'auto'}} source={require('../UI/img/nurofen.png')}/>
                </View>
                <View>
                <Text style={styles.textBlock}>Нурофен</Text>
                <Text style={styles.textdesc}>капсулы 400 мг 10 шт</Text>
                <View style={{justifyContent: 'space-between', flexDirection: 'row', marginTop: 15}}>
                    <Text style={styles.textBlock}>{price} ₽</Text>
                    <View style={{flexDirection: 'row', marginLeft: '20%', justifyContent: 'space-between'}}>
                        <TouchableOpacity onPress={()=> ((quantity>0) ? setquantity(quantity-1) : quantity)} style={{width: 30, height: 30, backgroundColor: 'rgba(227, 227, 227, 1)', borderRadius: 5, marginRight: '7%'}}>
                            <Text style={{marginTop: 'auto', marginLeft: 'auto', marginRight: 'auto', marginBottom: 'auto', fontWeight: 'bold'}}>-</Text>
                        </TouchableOpacity>
                        <Text style={{fontWeight:'500', marginTop:'3%'}}>{quantity}</Text>
                        <TouchableOpacity onPress={()=> ((quantity>=0) ? setquantity(quantity+1) : quantity)} style={{width: 30, height: 30, backgroundColor: 'rgba(145, 211, 55, 1)',  borderRadius: 5, marginLeft: '7%'}}>
                            <Text style={{marginTop: 'auto', marginLeft: 'auto', marginRight: 'auto', marginBottom: 'auto', fontWeight: 'bold', color: 'white'}}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            
            
            </View>
            <View style={{flexDirection: 'row', width: '90%', marginLeft: 'auto', marginRight: 'auto', padding: '3%',
            borderColor: '#dbdbdb',
            borderRadius: 10,
            borderWidth: 1,
            height: 104,
            width: 358,
            paddingVertical: 10,
            marginBottom: 10,
            }}>
                <View>
                    <Image style={{marginBottom: 'auto', marginTop: 'auto'}} source={require('../UI/img/no-shpa.png')}/>
                </View>
                <View>
                <Text style={styles.textBlock}>Но-шпа</Text>
                <Text style={styles.textdesc}>80 мг, таблетки, 24 шт.</Text>
                <View style={{justifyContent: 'space-between', flexDirection: 'row', marginTop: 15}}>
                    <Text style={styles.textBlock}>{price} ₽</Text>
                    <View style={{flexDirection: 'row', marginLeft: '20%', justifyContent: 'space-between'}}>
                        <TouchableOpacity onPress={()=> ((coll>0) ? setcoll(coll-1) : coll)} style={{width: 30, height: 30, backgroundColor: 'rgba(227, 227, 227, 1)', borderRadius: 5, marginRight: '7%'}}>
                            <Text style={{marginTop: 'auto', marginLeft: 'auto', marginRight: 'auto', marginBottom: 'auto', fontWeight: 'bold'}}>-</Text>
                        </TouchableOpacity>
                        <Text style={{fontWeight:'500', marginTop:'3%'}}>{coll}</Text>
                        <TouchableOpacity onPress={()=> ((coll>=0) ? setcoll(coll+1) : coll)} style={{width: 30, height: 30, backgroundColor: 'rgba(145, 211, 55, 1)',  borderRadius: 5, marginLeft: '7%'}}>
                            <Text style={{marginTop: 'auto', marginLeft: 'auto', marginRight: 'auto', marginBottom: 'auto', fontWeight: 'bold', color: 'white'}}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            
            
            </View>
            <View style={{justifyContent: 'space-between', flexDirection: 'row', marginTop: '40%', width: '90%', marginLeft: 'auto', marginRight: 'auto'}}>
                <Text style={{marginLeft:'2%', color: 'black', fontSize: 16 }}>Итого:</Text>
                <Text style={{color: 'rgba(145, 211, 55, 1)', fontSize: 20, fontWeight: '600' }}>{price+price2} ₽</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('MainPayment')}
            style={{width: '90%', height: '8%', backgroundColor: 'rgba(145, 211, 55, 1)', marginRight: 'auto', marginLeft: 'auto',
            borderRadius: 15, marginTop: '5%',
            }}>
                <Text style={{marginRight: 'auto', marginLeft: 'auto', marginTop: 'auto', marginBottom: 'auto', color: 'white',}}>Перейти к оформлению</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'black',
        marginLeft: 'auto',
        marginRight: '15%',
    },
    textBlock:{
        fontSize: 18,
        fontWeight: 'bold'
    },
    textdesc:{
        fontSize: 12,
        color: '#979797'
    }
})
