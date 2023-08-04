import React, { useState } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, Modal } from "react-native";

import { useNavigation } from '@react-navigation/native';
import { ScrollOrder } from "./ModalOrder/ScrollOrder";
import { ModalSupport } from "./Modules/ModalSupport";

export const MainProfile = () =>{
    const navigation = useNavigation();
    const [modal, setmodal] = useState(false);



    return(
        <View style={{width: '100%', height: '100%', backgroundColor: 'white'}}>
            <Modal
            animationType="fade" 
            transparent={true}
            visible={modal}
            onRequestClose={() => {
                setmodal(!modal);
            }}
            >
                <TouchableOpacity onPress={()=> {setmodal(!modal)}}
                style={{backgroundColor:'black', opacity: 0.6, width: '100%', height: '100%'}}></TouchableOpacity>
                <ModalSupport/>
            </Modal>
            <Text style={styles.texthead}>Профиль</Text>
            <View style={{width: '100%', justifyContent: 'space-between', flexDirection: 'row', paddingLeft: 16, paddingRight: 16, marginTop: 35,}}>
                <Text>Екатерина Иванова</Text>
                <TouchableOpacity onPress={() => navigation.navigate('MainRegister')}>
                    <Image source={require('../../UI/img/rename.png')}/>
                </TouchableOpacity>
            </View>
            <Text style={{color: 'rgba(145, 211, 55, 1)', marginLeft: 16,}}>+7 (902) 763-95-12</Text>
            <Text style={{color: 'black', marginLeft: 16, marginTop: 39}}>Активный заказ</Text>
            <ScrollOrder/>
            <TouchableOpacity onPress={() => navigation.navigate('OrderHistory')}
            style={{width: '90%', height: 42, backgroundColor: 'white', borderColor: '#dbdbdb', borderRadius: 12,borderWidth: 1, marginTop: 20, justifyContent: 'space-between',
            flexDirection: 'row', marginLeft: 'auto', marginRight: 'auto'
            }}>
                <Text style={{ marginLeft: 10, marginTop: 'auto', marginBottom: 'auto',}}>История заказов</Text>
                <Image style={{marginTop: 'auto', marginBottom: 'auto',}} source={require('../../UI/img/next.png')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> {setmodal(!modal)}}
            style={{width: '90%', height: 42, backgroundColor: 'white', borderRadius: 12, borderColor: '#dbdbdb',
            borderWidth: 1, marginTop: 20, justifyContent: 'space-between',
            flexDirection: 'row', marginLeft: 'auto', marginRight: 'auto'
            }}>
                <Text style={{ marginLeft: 10, marginTop: 'auto', marginBottom: 'auto',}}>Поддержка</Text>
                <Image style={{marginTop: 'auto', marginBottom: 'auto',}} source={require('../../UI/img/next.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={{width: '90%', height: 42, backgroundColor: 'white', borderRadius: 12, borderColor: '#dbdbdb',
 borderWidth: 1, marginTop: 20, justifyContent: 'space-between',
            flexDirection: 'row', marginLeft: 'auto', marginRight: 'auto'
            }}>
                <Text style={{ marginLeft: 10, marginTop: 'auto', marginBottom: 'auto',}}>Выйти из профиля</Text>
                <Image style={{marginTop: 'auto', marginBottom: 'auto',}} source={require('../../UI/img/next.png')}/>
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
    texthead:{
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 40,
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'black',
    },
})