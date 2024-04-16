import React, { useReducer } from "react";
import { StyleSheet,Text,View, Button, ScrollView } from "react-native";


type Action = { type: 'increment' | 'decrement'; payload: number };

const reducer = (state: { count: number }, action: Action): { count: number } => {
    
    console.log(action);
    switch(action.type){
        case 'increment':
            return {...state, count: state.count + action.payload};
        case 'decrement':
            return {...state, count: state.count - action.payload};
        default:
            return state;   
    }
    
    
};


//const reducer = (state, action)
//state == {count:0}
//action == {type: 'increment' || type:'decrement', payload}


export default function CounterScreen(){
    //const [counter, setCounter] = useState(0);
    const [state, dispatch] = useReducer(reducer, {count:0});

    return(
        <View>
            <Button title= "Arttır" onPress={() => {
                //setCounter(counter+1);
                //increment olduğunda 1 arttırma işlemi yapılır
                dispatch({type: 'increment', payload:1});
            }}/>

            <Button title= "Azalt" onPress={() => {
                //setCounter(counter-1);
                dispatch({type: 'decrement', payload:1});
            }}/>
            <Text>Sayı: {state.count}</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    
})