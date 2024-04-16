import { StatusBar } from "react-native";
import { StyleSheet,Text, View, FlatList } from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from "./src/screens/HomeScreen";
import CoursesScreen from "./src/screens/CoursesScreen";
import CoursesInformationScreen from "./src/screens/CoursesInformationScreen";
import CounterScreen from "./src/screens/CounterScreen";
import BoxScreen from "./src/screens/BoxScreen";
import BoxScreenTwo from "./src/screens/BoxScreenTwo";
import ColorChangeScreen from "./src/screens/ColorChangeScreen";
import PasswordScreen from "./src/screens/PasswordScreen";
import DesignScreen from "./src/screens/DesignScreen";

function App(){
  //const message = 'JavaScript';
  const Stack = createNativeStackNavigator();
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home"component={HomeScreen}/>
        <Stack.Screen name="CoursesScreen" component={CoursesScreen} />
        <Stack.Screen name="CoursesInformationScreen" component={CoursesInformationScreen} />
        <Stack.Screen name="CounterScreen" component={CounterScreen} />
        <Stack.Screen name="BoxScreen" component={BoxScreen} />
        <Stack.Screen name="BoxScreenTwo" component={BoxScreenTwo}/>
        <Stack.Screen name="ColorChangeScreen" component={ColorChangeScreen}/>
        <Stack.Screen name="PasswordScreen" component={PasswordScreen}/>
        <Stack.Screen name="DesignScreen" component={DesignScreen}/>
      </Stack.Navigator>
    </NavigationContainer>

    /*
    <View style={styles.container}>
      <Text style={styles.title}> React Native</Text>
      <Text style={styles.content}>React JS</Text>
      <Text style={styles.content}>{message}</Text>
    </View>
    */
  );
}




  /*
  container: {
    flex: 1,
    backgroundColor : '#fff',
    alignItems : 'center',
    justifyContent: 'center',

  },

  title: {
    fontSize: 50,
  },

  content:{
    fontSize: 20,
  }
  */




export default App;