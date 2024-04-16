import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import React, { useState } from 'react'

export default function PasswordScreen(){
    const [password, setpassword] = useState('');
    return(
        <View style = {styles.main}>
            <Text>Şifrenizi Giriniz</Text>
            <TextInput 
            style={styles.input} 
            autoCapitalize="none"
            autoCorrect={false}
            value = {password}
            onChangeText={(newValue)=> setpassword(newValue)}
            />
            {password.length < 6 ?(
                <Text>Şifre En Az 6 Karakter Olmalıdır</Text>
            ):null}
            
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        margin: 10,
    },
    input:{
        borderColor: `black`,
        borderWidth: 1,
        margin: 10,
        padding: 15,
    }
})