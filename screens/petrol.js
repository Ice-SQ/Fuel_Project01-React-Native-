import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

export default function Fuel() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.Tmain}>Petrol</Text>

      <Image source={require("../assets/octaine.jpg")} style={styles.img} />

    <Text style={styles.para}>Octaine 92 1L = RS 338</Text>
    <Text style={styles.para}>Octaine 93 1L = RS 344</Text>
    <Text style={styles.para}>Octaine 95 1L = RS 348</Text>



    <Text style={styles.para1}>Maximum Capacity for vehicles</Text>
    <Text style={styles.para2}>For Cars :- Rs 8000</Text>
    <Text style={styles.para2}>For Tree Wheel :- Rs 5000</Text>
    <Text style={styles.para2}>For Motor Bicycle Rs :- 2000</Text>
     
    

       



      </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 30,
  },
  Tmain:{
        fontSize: 50,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 50,
    fontWeight: "500",
    color:"red",
      

  },

  img: {
    height: 200,
    width: 200,
    alignSelf: "center",
    marginBottom: 10,
    top:-40,
  },
  
  para:{
    marginHorizontal: 80,
    paddingVertical: 10,
    marginBottom: 10,
    backgroundColor: "lightgreen",
    top:-30,
    

  },
  para1:{
    marginHorizontal: 70,
    paddingVertical: 10,
    marginBottom: 10,
    backgroundColor: "red",
    top:-30,
    

  },
  para2:{
    marginHorizontal: 80,
    paddingVertical: 10,
    marginBottom: 10,
    backgroundColor: "lightgreen",
    top:-35,

  },
  


  
});