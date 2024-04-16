import React from "react";
import { StyleSheet,Text,View, Button } from "react-native";


export default function HomeScreen({navigation}){
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>HomeScreen</Text>
            <Button 
            title="Go to CoursesScreen" 
            onPress={() => navigation.navigate('CoursesScreen')}/>

        <Button 
            title="Go to CoursesInformationScreen" 
            onPress={() => navigation.navigate('CoursesInformationScreen')}/>

        <Button 
            title="Go to CounterScreen" 
            onPress={() => navigation.navigate('CounterScreen')}/>

        <Button 
            title="Go to BoxScreen" 
            onPress={() => navigation.navigate('BoxScreen')}/>

        <Button 
            title="Go to BoxScreenTwo" 
            onPress={() => navigation.navigate('BoxScreenTwo')}/>

        <Button 
            title="Go to ColorChangeScreen" 
            onPress={() => navigation.navigate('ColorChangeScreen')}/>

        <Button 
            title="Go to PasswordScreen" 
            onPress={() => navigation.navigate('PasswordScreen')}/>

        <Button 
            title="Go to DesignScreen" 
            onPress={() => navigation.navigate('DesignScreen')}/>
   
        </View>
    )
}

const styles = StyleSheet.create({
    
})