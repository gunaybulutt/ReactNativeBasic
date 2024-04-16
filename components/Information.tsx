import React from "react";
import { StyleSheet,Text,View,Image, Button } from "react-native";


export default function Information({title,imageSource,desc}){
    return(
        <View>
            <View style={styles.descTitle}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.textDesc}>{desc}</Text>
            </View>
            <Image style={styles.img} source={imageSource}/>
        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        width: "100%"
    },
    descTitle: {
        alignItems: "center",
        paddingVertical: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: "black"
    },
    textDesc:{
        fontSize: 15,
        color: "black",
    }
})