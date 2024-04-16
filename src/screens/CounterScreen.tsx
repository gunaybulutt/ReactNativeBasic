import React, { useState } from "react";
import { StyleSheet,Text,View, Button, ScrollView } from "react-native";



export default function CounterScreen(){
    const [counter, setCounter] = useState(0);
    return(
        <View>
            <Button title= "Arttır" onPress={() => {
                setCounter(counter+1);
            }}/>

            <Button title= "Azalt" onPress={() => {
                setCounter(counter-1);
            }}/>

            <Text>Sayı: {counter}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    
})