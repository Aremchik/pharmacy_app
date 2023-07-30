import React, { useState, useEffect } from 'react'
import { View, Animated, TouchableOpacity, Text, StyleSheet } from 'react-native'

export const ExpandableView = ({expanded = false}) => {
  const [height] = useState(new Animated.Value(0));
  const [opacity] = useState(new Animated.Value(0));
  useEffect(()=> {
      Animated.timing(height,{
          toValue: !expanded ? 160 : 0,
          duration: 500,
          useNativeDriver: false
      }).start() 
      Animated.timing(opacity,{
          toValue: !expanded ? 1 : 0,
          duration: !expanded ? 1000 : 1,
          useNativeDriver: false
      }).start();
  },[expanded,height,opacity]);

  return (
    <Animated.View style={{height,backgroundColor:'#F2F2F2',borderBottomLeftRadius:7,borderBottomRightRadius:7}}>
    <Animated.View style={{opacity}}>
        <Animated.View style={{backgroundColor:'#676767',height:1,width:300,marginLeft:25,opacity,marginTop:5}}></Animated.View>
        <Animated.Text style={{marginLeft:15,marginTop:5,opacity, color: '#505051'}}>Таблетки желтого с зеленоватым или оранжеватым оттенком цвета, круглые, двояковыпуклые, с гравировкой "spa" на одной стороне.
В 1 таб. содержится 40мг. дротаверина гидрохлорид.
Вспомогательные вещества: магния стеарат - 3 мг, тальк - 4 мг, повидон - 6 мг, крахмал кукурузный - 35 мг, лактозы моногидрат - 52 мг.</Animated.Text>
    </Animated.View>
</Animated.View>
  );
};


const styles = StyleSheet.create({
  button: {
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    padding: 10
  },
  textContainer: {
    backgroundColor: '#F2F2F2',
    padding: 10,
  },
  text: {
    fontSize: 20,
  },
})
