import React from "react";
import { ScrollView, View, TouchableOpacity, StyleSheet, Text, Image } from "react-native";

export const PopularProduct = () => {

    const PopularData = [
        { id: 1, title: 'Нурофен', description: 'таблетки 10 мг 30 шт', price: '150' },
        { id: 2, title: 'Кетонал', description: 'раствор 200 мл', price: '151' },
        { id: 3, title: 'Спазмалгон', description: 'таблетки, 20 шт', price: '152' },
      ];

    return(
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.sectionContainer}>
        {PopularData.map((button) => (
          <TouchableOpacity key={button.id} style={styles.button}>
            <View style={{alignItems: 'center',}}>
            <View style={{flexDirection:'row'}}>
              <Image
                  style={{width: 85.7, height: 50, marginLeft: 50, marginTop: '20%', marginBottom: '15%'}}
                  source={require('../../UI/img/nurofenProd.png')}
              />
              <Image 
                          style={{marginRight: 30, marginTop: 6}}
                          source={require('../../UI/img/lovePng.png')}
                      />
            </View>
            </View>
            <Text style={[styles.text, styles.buttonTitleText]}>{button.title}</Text>
            <Text style={[styles.text, styles.buttonDescText]}>{button.description}</Text>
            <Text style={[styles.text, styles.buttonPriceText]}>от {button.price} ₽</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
        )
}

const styles = StyleSheet.create({
    sectionContainer: {
        marginVertical: 20,
        paddingHorizontal: 10,
        height: 230,
      },
      button: {
        marginLeft: 1,
        marginTop: '1%',
        height: '97%',
        backgroundColor: 'white',
        paddingVertical: 9,
        marginRight: 10,
        borderRadius: 10,
        width: 150,
        shadowRadius: 10,
        elevation: 4, 
      },
      text: {
        marginLeft: 15,
    },
      buttonTitleText: {
        marginTop: '3%',
        color: '#232324',
        fontSize: 16,
        fontWeight: 'bold',
      },
      buttonDescText: {
        color: '#979797',
        fontSize: 12,
        marginTop: '2%'
    },
    buttonPriceText: {
        color: '#91D337',
        fontSize: 17,
        marginTop: '20%',
        fontWeight: 'bold'
    }
})