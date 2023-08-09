import React, { useState } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { XSvg } from "../UI/svg/XSvg";



export const Basket = () =>{
    const navigation = useNavigation();
    const [quantity, setquantity] = useState(1);
    const [coll, setcoll] = useState(1);
    const price = 150
    const price2 = 215
    return(
        <View style={styles.container}>
        <ScrollView >

            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Корзина</Text>
                <TouchableOpacity>
                <Text style={styles.clearText}>Очистить корзину</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.aptekContainer1}>
            <View style={{justifyContent: 'space-between', flexDirection: 'row', marginTop: 20}}>
                <Text style={{marginLeft: '6%', fontWeight: 'bold', fontSize: 16, color: 'rgba(145, 211, 55, 1)'}}>Аптека “Здрав сити”</Text>
                <TouchableOpacity style={{height: 30, borderRadius: 5, marginRight: 10}}>
                    <Text style={{color: '#CE4F4F'}}>Удалить заказ</Text>
                </TouchableOpacity>
            </View>

            <Text style={{ marginTop: '1%', marginLeft: '6%', color: 'rgba(151, 151, 151, 1)', fontSize: 16}}>ул. Кирочная 45</Text>
            <Text style={{marginLeft: '6%', color: 'rgba(151, 151, 151, 1)', fontSize: 16, marginBottom: '4%'}}>Пн-Вс 08:00-21:00</Text>
            
            <View style={styles.productContainer}>
                <View>
                    <Image style={{marginBottom: 'auto', marginTop: 'auto'}} source={require('../UI/img/nurofen.png')}/>
                </View>
                <View>
                    <View style={{justifyContent: 'space-between', flexDirection: 'row',}}>
                        
                        <View>
                            <Text style={styles.textBlock}>Нурофен</Text>
                            <Text style={styles.textdesc}>капсулы 400 мг 10 шт</Text>
                        </View>
                        <View style={{marginTop: '2%', marginRight: '2%'}}>
                            <XSvg/>
                        </View>
                    </View>
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
            <View style={styles.productContainer}>
                <View>
                    <Image style={{marginBottom: 'auto', marginTop: 'auto'}} source={require('../UI/img/no-shpa.png')}/>
                </View>
                <View>
                <View style={{justifyContent: 'space-between', flexDirection: 'row',}}>
                        
                        <View>
                            <Text style={styles.textBlock}>Но-шпа</Text>
                            <Text style={styles.textdesc}>капсулы 400 мг 10 шт</Text>
                        </View>
                        <View style={{marginTop: '2%', marginRight: '2%'}}>
                            <XSvg/>
                        </View>
                    </View>
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
                <TouchableOpacity onPress={() => navigation.navigate('MainPayment')} style={styles.buttonContainerAptek}>
                    <Text style={styles.buttonTextAptek}>Продолжить в этой аптеке</Text>
                </TouchableOpacity>
            </View>
            <View >
                
                <View style={styles.totalContainerAptek}>
                    <Text style={styles.totalTitleText}>Итого за заказ:</Text>
                    <Text style={[styles.totalPriceTextAptek, {marginLeft: 15}]}>{price+price2} ₽</Text>
                    
                    <TouchableOpacity style={[styles.bookContainer, {backgroundColor: 'rgba(145, 211, 55, 1)',}]}>
                        <Text style={styles.bookText}>Забронировать</Text>
                    </TouchableOpacity>
                </View>
            
         
            </View>

            <View style={styles.aptekContainer1}>
            <View style={{justifyContent: 'space-between', flexDirection: 'row', marginTop: 20}}>
                <Text style={{marginLeft: '6%', fontWeight: 'bold', fontSize: 16, color: 'rgba(145, 211, 55, 1)'}}>Аптека “Здрав сити”</Text>
                <TouchableOpacity style={{height: 30, borderRadius: 5, marginRight: 10}}>
                    <Text style={{color: '#CE4F4F'}}>Удалить заказ</Text>
                </TouchableOpacity>
            </View>

            <Text style={{ marginTop: '1%', marginLeft: '6%', color: 'rgba(151, 151, 151, 1)', fontSize: 16}}>ул. Кирочная 45</Text>
            <Text style={{marginLeft: '6%', color: 'rgba(151, 151, 151, 1)', fontSize: 16, marginBottom: '4%'}}>Пн-Вс 08:00-21:00</Text>
            
            <View style={styles.productContainer}>
                <View>
                    <Image style={{marginBottom: 'auto', marginTop: 'auto'}} source={require('../UI/img/nurofen.png')}/>
                </View>
                <View>
                    <View style={{justifyContent: 'space-between', flexDirection: 'row',}}>
                        
                        <View>
                            <Text style={styles.textBlock}>Нурофен</Text>
                            <Text style={styles.textdesc}>капсулы 400 мг 10 шт</Text>
                        </View>
                        <View style={{marginTop: '2%', marginRight: '2%'}}>
                            <XSvg/>
                        </View>
                    </View>
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
            <View style={styles.productContainer}>
                <View>
                    <Image style={{marginBottom: 'auto', marginTop: 'auto'}} source={require('../UI/img/no-shpa.png')}/>
                </View>
                <View>
                <View style={{justifyContent: 'space-between', flexDirection: 'row',}}>
                        
                        <View>
                            <Text style={styles.textBlock}>Но-шпа</Text>
                            <Text style={styles.textdesc}>капсулы 400 мг 10 шт</Text>
                        </View>
                        <View style={{marginTop: '2%', marginRight: '2%'}}>
                            <XSvg/>
                        </View>
                    </View>
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
                <TouchableOpacity onPress={() => navigation.navigate('MainPayment')} style={styles.buttonContainerAptek}>
                    <Text style={styles.buttonTextAptek}>Продолжить в этой аптеке</Text>
                </TouchableOpacity>
            </View>
            <View style={{marginBottom: 50, }}>
                
                <View style={styles.totalContainerAptek}>
                    <Text style={styles.totalTitleText}>Итого за заказ:</Text>
                    <Text style={[styles.totalPriceTextAptek, {marginLeft: 15}]}>{price+price2} ₽</Text>
                    
                    <TouchableOpacity style={[styles.bookContainer, {backgroundColor: '#6EBAF4',}]}>
                        <Text style={styles.bookText}>Забронировать</Text>
                    </TouchableOpacity>
                </View>
            </View>
        
            <View style={{marginBottom: 100, }}>
            <View style={styles.totalContainer}>
                    <Text style={styles.totalTitleText}>Итого за 2 заказа:</Text>
                    <Text style={styles.totalPriceText}>{price+price2} ₽</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('MainPayment')}
                style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Перейти к оформлению</Text>
            </TouchableOpacity>
        </View>  

        </ScrollView>
        
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%', 
        backgroundColor: '#FCFCFC'
    },
    titleContainer:{
        justifyContent: 'space-between', 
        flexDirection: 'row', 
        marginTop: 40,
        alignItems: 'center'
    },
    titleText:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginLeft: '40%',
    },
    clearText:{
        fontSize: 12, 
        marginTop: 9, 
        marginRight: 18, 
        color: '#979797'
    },
    textBlock:{
        fontSize: 18,
        fontWeight: 'bold'
    },
    textdesc:{
        fontSize: 12,
        color: '#979797'
    },
    totalContainer: {
        justifyContent: 'space-between', 
        flexDirection: 'row', 
        marginTop: '4%', 
        width: '90%', 
        marginLeft: 'auto', 
        marginRight: 'auto',
        alignItems: 'center'
    },
    totalTitleText:{
        marginLeft:'2%', 
        color: '#525252', 
        fontSize: 18,
        fontWeight:'800'
    },
    totalPriceText: {
        color: 'rgba(145, 211, 55, 1)', 
        fontSize: 20, 
        fontWeight: '600' 
    },
    buttonContainer:{
        width: '90%', 
        height: 51, 
        backgroundColor: 'rgba(145, 211, 55, 1)', 
        marginRight: 'auto', 
        marginLeft: 'auto',
        borderRadius: 15, 
        marginTop: '5%',
    },
    buttonText:{
        marginRight: 'auto', 
        marginLeft: 'auto', 
        marginTop: 'auto', 
        marginBottom: 'auto', 
        color: 'white',
    },
    productContainer:{
        flexDirection: 'row', 
        width: '90%', 
        marginLeft: 'auto', 
        marginRight: 'auto', 
        padding: '3%',
        backgroundColor: '#FCFCFC',
        borderColor: '#FCFCFC',
        borderRadius: 10,
        borderWidth: 1,
        height: 104,
        width: 358,
        paddingVertical: 10,
        marginBottom: 10,
    },
    buttonTextAptek:{
        marginRight: 'auto', 
        marginLeft: 'auto', 
        marginTop: 'auto', 
        marginBottom: 'auto', 
        color: '#91D337',
        
    },
    buttonContainerAptek:{
        width: '90%', 
        height: 51, 
        borderColor: 'rgba(145, 211, 55, 1)', 
        marginRight: 'auto', 
        marginLeft: 'auto',
        borderRadius: 15, 
        marginTop: '5%',
        borderWidth: 2,
        marginBottom: '5%'
    },
    totalContainerAptek:{
        flexDirection: 'row', 
        marginTop: '6%', 
        width: '90%', 
        marginLeft: 'auto', 
        marginRight: 'auto',
        alignItems: 'center'
    },
    bookContainer:{
        width: 124,
        height: 37,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 30
    },
    totalPriceTextAptek:{
        color: 'rgba(145, 211, 55, 1)', 
        fontSize: 18, 
        fontWeight: '600' 
    },
    bookText:{
        color: 'white',
        fontSize: 14,
        fontWeight: '700'
    },
    aptekContainer1:{
        marginTop: 30,
        backgroundColor: '#FFFFFF',
        borderColor: '#E3E3E3',
        borderRadius: 20,
        borderWidth: 1
    }
})
