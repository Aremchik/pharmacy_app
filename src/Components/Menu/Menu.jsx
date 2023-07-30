import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';


export const Menu = () =>{
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('CatalogScreen')}>
                <Image source={require('../../UI/img/Icons.png')} style={{width: 54,height: 56,marginTop: 10,}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Love')}>
                <Image source={require('../../UI/img/love.png')} style={{width: 70,height: 55,marginTop: 13,}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Basket')}>
                <Image source={require('../../UI/img/basket.png')} style={{width: 54,height: 55,marginTop: 13,}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('MainProfile')}>
                <Image source={require('../../UI/img/profile.png')} style={{width: 54,height: 55,marginTop: 15,}}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 80,
        marginTop: 'auto',
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
        paddingLeft: '8%',
        paddingRight: '8%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: 'white',
        borderColor: '#dbdbdb',
        borderWidth: 1
    },
    ico:{
        width: 54,
        height: 55,
        marginTop: 10,
    }
})