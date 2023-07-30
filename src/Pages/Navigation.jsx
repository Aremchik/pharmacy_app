import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Page1 } from "./firstpages/page1";
import { Page2 } from "./firstpages/page2";
import { Page3 } from "./firstpages/page3";
import { MainPages } from "./MainPages";
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
import { useTheme } from 'react-native-paper';
import { View, Image } from "react-native";

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export const Menu = () =>{
  const theme = useTheme();
  theme.colors.secondaryContainer = "transperent"
  return (
      <Tab.Navigator barStyle={{backgroundColor:'white',position:'absolute',overflow:'hidden',height: 80, borderTopLeftRadius: 18, borderTopRightRadius: 18, borderColor: '#dbdbdb', borderWidth: 1}} activeColor={'#166040'} labeled={false} inactiveColor='#F8B513'>
          <Tab.Screen options={{headerShown: false, tabBarIcon: ({focused},labelstyle) => {
              return(
                  <View style={{alignItems:'center',justifyContent:'center',marginBottom:'100%'}}>
                      <Image style={{tintColor: focused ? '#91D337' : '#979797', width: 54,height: 55,marginTop: 17,resizeMode:'contain'}} source={require('../UI/img/Icons.png')}/>
                  </View> 
              );
          }}} name="CatalogScreen" component={CatalogScreen}/>
          
          <Tab.Screen options={{headerShown: false, tabBarIcon: ({focused,color}) => {
              return(
                  <View style={{alignItems:'center',justifyContent:'center',marginBottom:'100%'}}>
                      <Image style={{tintColor: focused ? '#91D337' : '#979797', width: 70,height: 55,marginTop: 17,resizeMode:'contain'}} source={require('../UI/img/love.png')}/>
                  </View>
              );
          }}} name="Love" component={Love}/>

          <Tab.Screen options={{headerShown: false, tabBarIcon: ({focused,color}) => {
              return(
                  <View style={{alignItems:'center',justifyContent:'center',marginBottom:'100%'}}>
                      <Image style={{tintColor: focused ? '#91D337' : '#979797', width: 54,height: 55,marginTop: 17,resizeMode:'contain'}} source={require('../UI/img/basket.png')}/>
                  </View>
              );
          }}} name="Basket" component={Basket}/>

          <Tab.Screen options={{headerShown: false, tabBarIcon: ({focused,color}) => {
              return(
                  <View style={{alignItems:'center',justifyContent:'center',marginBottom:'100%'}}>
                      <Image style={{tintColor: focused ? '#91D337' : '#979797', width: 54,height: 55,marginTop: 17,resizeMode:'contain'}} source={require('../UI/img/profile.png')}/>
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
          <Stack.Screen name="MainProfile" component={MainProfile} options={{headerShown: false}}/>
          <Stack.Screen name="Basket" component={Basket} options={{headerShown: false}}/>
          <Stack.Screen name="Love" component={Love} options={{headerShown: false}}/>
          <Stack.Screen name="Search" component={Search} options={{headerShown: false}}/>
          <Stack.Screen name="OrderHistory" component={OrderHistory} options={{headerShown: false}}/>
          <Stack.Screen name="OrderHistoryPay" component={OrderHistoryPay} options={{headerShown: false}}/>
          <Stack.Screen name="SmsCode" component={SmsCode} options={{headerShown: false}}/>
          <Stack.Screen name="ProductSreen" component={ProductSreen} options={{headerShown: false}}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}