import React from "react";
import { View } from "react-native";
import { MenuCatalog } from "../Components/Menu/MenuCatalog";


export const MainPages = () =>{

    return(
        <View style={{width: '100%', height: '100%'}}>
            <MenuCatalog/>
        </View>
    )
}