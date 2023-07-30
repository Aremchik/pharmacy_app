import React, { useState } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, Modal } from "react-native";
import { Menu } from "../../Components/Menu/Menu";
import { useNavigation } from '@react-navigation/native';
import { ModalDelete } from "./ModalDeletePay/Modal";
import { Order } from "./ModalOrder/Order";

export const OrderHistoryPay = () =>{
    const navigation = useNavigation();
    const [modal, setmodal] = useState(false);
    return(
        <View style={{width: '100%', height: '100%', backgroundColor: '#F5F5F5'}}>

            <Modal
            animationType="fade" 
            transparent={true}
            visible={modal}
            onRequestClose={() => {
                setmodal(!modal);
            }}>

                <TouchableOpacity onPress={()=> {setmodal(!modal)}}
                style={{backgroundColor:'black', opacity: 0.6, width: '100%', height: '100%'}}></TouchableOpacity>
                <ModalDelete modal={modal} setmodal={setmodal}/>                
            </Modal>


            <View style={{justifyContent: 'space-between', flexDirection: 'row', marginTop: '15%', paddingLeft: '5%'}}>
                <TouchableOpacity onPress={() => navigation.navigate('MainProfile')}>
                    <Image source={require('../../UI/img/back.png')}/>
                </TouchableOpacity>
                <Text style={{marginRight: 'auto', marginLeft: '25%'}}>История заказов</Text>
            </View>

            <View>
                <View style={{justifyContent: 'space-between', flexDirection: 'row', marginTop: 30, backgroundColor: 'rgba(151, 151, 151, 0.2)', marginLeft: 'auto', marginRight: 'auto',
                borderRadius: 15}}>
                    <TouchableOpacity style={{width: '35%', height: 30, borderWidth: 1, backgroundColor: 'white', borderRadius: 15,}}>
                        <Text style={{marginRight: 'auto', marginLeft: 'auto', marginTop: 'auto', marginBottom: 'auto', color: 'black'}}>Активные</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={() => navigation.navigate('OrderHistory')}
                    style={{width: '35%', height: 30, backgroundColor: 'rgba(151, 151, 151, 0.1)', borderRadius: 15,}}>
                        <Text style={{marginRight: 'auto', marginLeft: 'auto', marginTop: 'auto', marginBottom: 'auto', color: 'black', opacity: 0.7}}>Завершенные</Text>
                    </TouchableOpacity>    
                </View>

                <Order setmodal={setmodal} modal={modal}/>
                    
            </View>

            <Menu/>
        </View>
    )
}

