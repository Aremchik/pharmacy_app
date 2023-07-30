import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

export const ModalSupport = () =>{
    return(
        <View style={{width: '100%', height: '35%', borderTopLeftRadius: 25, borderTopRightRadius: 25, backgroundColor: 'white', marginTop: 'auto',}}>
            <Text style={{color: 'black', fontSize: 17, fontWeight: '600', marginLeft: 16, marginTop: 35,}}>Поддержка</Text>
                    
            <TouchableOpacity style={{width: '90%', height: '15%', marginTop: '5%',borderRadius: 15, marginLeft: 'auto', marginRight: 'auto', 
            justifyContent: 'space-between', flexDirection: 'row'}}>
                <Text style={{color: 'black', fontSize: 16}}>Позвоните нам</Text>
                <Image source={require('../../../UI/img/nomber.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={{width: '90%', height: '15%', marginTop: '1%',borderRadius: 15, marginLeft: 'auto', marginRight: 'auto', 
            justifyContent: 'space-between', flexDirection: 'row'}}>
                <Text style={{color: 'black', fontSize: 16}}>Telegram</Text>
                <Image source={require('../../../UI/img/tg.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={{width: '90%', height: '15%', marginTop: '1%',borderRadius: 15, marginLeft: 'auto', marginRight: 'auto', 
            justifyContent: 'space-between', flexDirection: 'row'}}>
                <Text style={{color: 'black', fontSize: 16}}>Вконтакте</Text>
                <Image source={require('../../../UI/img/vk.png')}/>
            </TouchableOpacity>
        </View>
    )
}