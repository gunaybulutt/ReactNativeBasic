import { StyleSheet, Text, View, Button } from "react-native";
import React, { useReducer } from 'react'
import ColorChange from "../../components/ColorChange";

export default function ColorChangeScreen(){

    type Action = { type: 'changeRed' | 'changeGreen' | 'changeBlue'; payload: number };


    const reducer = (state: { red: number; green: number; blue: number }, action: Action): { red: number; green: number; blue: number } => {
        console.log(action);
        switch (action.type) {
            case 'changeRed':
                return state.red + action.payload > 255 || state.red + action.payload < 0 
                ? state 
                : { ...state, red: state.red + action.payload };
            case 'changeGreen':
                return state.green + action.payload > 255 || state.green + action.payload < 0 
                ? state 
                :{ ...state, green: state.green + action.payload };
            case 'changeBlue':
                return state.blue + action.payload > 255 || state.blue + action.payload < 0 
                ? state 
                :{ ...state, blue: state.blue + action.payload };
            default:
                return state;
        }
    };


    
    const [state, dispatch] = useReducer(reducer,{red:0, green:0, blue:0})

    return(
        <View>

            <ColorChange color = "Kırmızı" 
                onIncrease={() =>
                    dispatch({type:`changeRed`, payload: 20})} 
                onDecrease={() => 
                    dispatch({type:`changeRed`, payload: -20})
            }/>

            <ColorChange color = "Mavi" 
                onIncrease={() =>
                    dispatch({type:`changeBlue`, payload: 20})} 
                onDecrease={() => 
                    dispatch({type:`changeBlue`, payload: -20})
            }/>

            <ColorChange color = "Yeşil" 
                onIncrease={() =>
                    dispatch({type:`changeGreen`, payload: 20})} 
                onDecrease={() => 
                    dispatch({type:`changeGreen`, payload: -20})
            }/>

            <View style={{
                height:150, 
                width:150, 
                backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`}
            }/>
                    
        </View>
    )
}

const style = StyleSheet.create({})