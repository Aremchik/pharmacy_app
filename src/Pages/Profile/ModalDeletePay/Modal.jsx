import React from "react";
import { View, Text, TouchableOpacity } from "react-native";


export const ModalDelete = ({modal, setmodal}) =>{
    return(
        <View style={{width: '100%', height: '35%', borderTopLeftRadius: 25, borderTopRightRadius: 25, backgroundColor: 'white', marginTop: 'auto',}}>
            <Text style={{color: 'black', fontSize: 17, fontWeight: '600', marginLeft: 16, marginTop: 35,}}>Вы действительно хотите отказаться от заказа?</Text>
                    
            <TouchableOpacity onPress={()=> {setmodal(!modal)}}
                    style={{width: '90%', height: '15%', marginTop: '5%',borderRadius: 15, marginLeft: 'auto', marginRight: 'auto', 
                    justifyContent: 'space-between', flexDirection: 'row', borderColor: 'rgba(145, 211, 55, 1)', borderWidth: 1}}>
                <Text style={{color: 'rgba(145, 211, 55, 1)', fontSize: 16, marginBottom: 'auto', marginLeft: 'auto', marginRight: 'auto', marginTop: 'auto'}}>Да</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> {setmodal(!modal)}}
                    style={{ backgroundColor: 'rgba(145, 211, 55, 1)', width: '90%', height: '15%', marginTop: '5%',borderRadius: 15, marginLeft: 'auto', marginRight: 'auto', 
                    justifyContent: 'space-between', flexDirection: 'row'}}>
                <Text style={{color: 'white', fontSize: 16, marginBottom: 'auto', marginLeft: 'auto', marginRight: 'auto', marginTop: 'auto'}}>Нет</Text>
            </TouchableOpacity>                 
        </View>
    )
}