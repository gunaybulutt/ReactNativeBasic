import { StyleSheet, Text, View, Button, TextInput, ScrollView } from "react-native";
import React, { useState } from 'react'

export default function DesignScreen(){
    const [password, setpassword] = useState('');
    return(
        <ScrollView>

            <View style = {styles.mainView}>
         
                <Text style={styles.mainText}>1</Text>
                <Text style={styles.mainText}>2</Text>
                <Text style={styles.mainText}>3</Text>
            </View>
        
         </ScrollView>
    
    )
}

const styles = StyleSheet.create({
    mainView:{
        borderWidth: 10,
        borderColor: 'black',
        margin: 20,
        borderRadius: 20,
        alignItems: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    mainText:{
        borderWidth: 1,
        borderColor: 'red',
        margin: 30,
        padding: 30,
        borderRadius: 50
        //marginHorizontal: 30
    },
    mainViewTwo:{
        borderWidth: 10,
        borderColor: 'black',
        margin: 30,
        alignItems: 'center',
        flexDirection: 'row',
    }
})