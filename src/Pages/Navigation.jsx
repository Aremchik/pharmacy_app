import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Page1 } from "./firstpages/page1";
import { Page2 } from "./firstpages/page2";
import { Page3 } from "./firstpages/page3";
import { MainProfile } from "./Profile/MainProfile";
import { OrderHistory } from "./Profile/OrderHistory";
import { OrderHistoryPay } from "./Profile/OrderHistoryPay";
import { CityPicker } from '../Components/CityPicker'
import { CatalogScreen } from './CatalogScreen'
import { Basket } from "./Basket";
import { Love } from "./Love";
import {Search} from "../Components/forCatalogPage/Search"
import { MainRegister } from "./RegisterPages/MainRegister";
import { SmsCode } from "./RegisterPages/SmsCode";
import { MainPayment } from "./Pament/MainPayment";
import { ProductSreen } from "./ProductSreen";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Badge, useTheme } from 'react-native-paper';
import { View, Image } from "react-native";
import { BasketSvg } from "../UI/svg/Basketsvg";
import { CatalogSvg } from "../UI/svg/CatalogSvg";
import { LoveSvg } from "../UI/svg/LoveSvg";
import { ProfileSvg } from "../UI/svg/ProfileSvg";

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export const Menu = () =>{
  const theme = useTheme();
  theme.colors.secondaryContainer = "transperent"
  return (
        <Tab.Navigator barStyle={{backgroundColor:'white',position:'absolute',overflow:'hidden',height: 80, borderTopLeftRadius: 18, borderTopRightRadius: 18, borderColor: '#dbdbdb', borderWidth: 1}} activeColor={'#166040'} labeled={false} inactiveColor='#F8B513'>
            <Tab.Screen options={{headerShown: false, tabBarIcon: ({focused},labelstyle) => {
                return(
                    <View style={{alignItems:'center',justifyContent:'center',marginBottom:'100%', marginTop: '30%'}}>
                            <CatalogSvg color={focused ? '#91D337' : '#979797'}/>
                    </View> 
                );
            }}} name="CatalogScreen" component={CatalogScreen}/>
            
            <Tab.Screen options={{headerShown: false, tabBarIcon: ({focused,color}) => {
                return(
                    <View style={{alignItems:'center',justifyContent:'center',marginBottom:'100%', marginTop: '30%'}}>
                            <LoveSvg color={focused ? '#91D337' : '#979797'}/>
                    </View>
                );
            }}} name="Love" component={Love}/>

            <Tab.Screen options={{headerShown: false, tabBarIcon: ({focused,color}) => {
                return(
                    <View style={{alignItems:'center',justifyContent:'center',marginBottom:'100%', marginTop: '30%'}}>
                        <BasketSvg color={focused ? '#91D337' : '#979797'}/>
                    </View>
                );
            }}} name="Basket" component={Basket}/>

            <Tab.Screen options={{headerShown: false, tabBarIcon: ({focused,color}) => {
                return(
                    <View style={{alignItems:'center',justifyContent:'center',marginBottom:'100%', marginTop: '30%'}}>
                            <ProfileSvg color={focused ? '#91D337' : '#979797'}/>
                    </View>
                );
            }}} name="MainProfile" component={MainProfile}/>
        </Tab.Navigator>
  );
}

export const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
           
          <Stack.Screen name="Page1" component={Page1} options={{headerShown: false}}/>
          <Stack.Screen name="Page2" component={Page2} options={{headerShown: false}}/>
          <Stack.Screen name="Page3" component={Page3} options={{headerShown: false}}/>
          <Stack.Screen name="MainPayment" component={MainPayment} options={{headerShown: false}}/>
          <Stack.Screen name="MainRegister" component={MainRegister} options={{headerShown: false}}/>
          <Stack.Screen name="CityPicker" component={CityPicker} options={{headerShown: false}}/>
        <Stack.Screen options={{headerShown: false}} name='Menu' component={Menu}/>
          <Stack.Screen name="Search" component={Search} options={{headerShown: false}}/>
          <Stack.Screen name="OrderHistory" component={OrderHistory} options={{headerShown: false}}/>
          <Stack.Screen name="OrderHistoryPay" component={OrderHistoryPay} options={{headerShown: false}}/>
          <Stack.Screen name="SmsCode" component={SmsCode} options={{headerShown: false}}/>
          <Stack.Screen name="ProductSreen" component={ProductSreen} options={{headerShown: false}}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}