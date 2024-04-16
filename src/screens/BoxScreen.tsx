import React, { useState } from "react";
import { StyleSheet,Text,View, Button, ScrollView, FlatList } from "react-native";



export default function BoxScreen(){
    const [colors, setColor] = useState<string[]>([]);
    
    const randomColor = () =>{
        const red = Math.floor(Math.random()*256);
        const blue = Math.floor(Math.random()*256);
        const green = Math.floor(Math.random()*256);
        return `rgb(${red},${blue},${green})`;
    }

    return(
        <View>

            <Button title="Kutu Ekle" onPress={() => {
                setColor([...colors, randomColor()]);
            }}/>

        <FlatList 
            data= {colors}
            renderItem={({item}) => {
                return (<View 
                    style = {{
                        height: 150, 
                        width: 150, 
                        backgroundColor: item,
                        marginVertical: 20
                    }}/>
                )
            }}
        />
                    
                
            
        </View>
    )
}

const styles = StyleSheet.create({
    
})