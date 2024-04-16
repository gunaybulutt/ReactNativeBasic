import React from "react";
import { StyleSheet,Text,View, Button, ScrollView } from "react-native";
import Information from "../../components/Information";


export default function CoursesInformationScreen(){
    return(
        <ScrollView>
            <Information 
            title="Angular Eğitimi"
            imageSource={require("../../assets/angular.jpg")}
            desc="Kapsamlı Angular Eğitimi" />
            <Information 
            title="Bootstrap Eğitimi"
            imageSource={require("../../assets/bootstrap5.png")}
            desc="Kapsamlı Bootstrap Eğitimi" />
            <Information 
            title="C Eğitimi"
            imageSource={require("../../assets/c.png")}
            desc="Kapsamlı C Eğitimi" />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    
})