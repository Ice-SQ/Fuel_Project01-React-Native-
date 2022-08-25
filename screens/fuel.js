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
      <Text style={styles.Tmain}>Fuel</Text>

      <Image source={require("../assets/logo.jpg")} style={styles.img} />

     
      <TouchableOpacity
          style={styles.btn}
          onPress={() => {navigation.navigate("petrol");}}>
          <Text style={styles.btnTxt}>Petrol</Text>
        </TouchableOpacity>
     
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {navigation.navigate("register");}}>
          <Text style={styles.btnTxt}>Diesel</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => {navigation.navigate("register");}}>
          <Text style={styles.btnTxt}>Kirosine</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => {navigation.navigate("register");}}>
          <Text style={styles.btnTxt}>LP Gas</Text>
        </TouchableOpacity>

       



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
    height: 100,
    width: 100,
    alignSelf: "center",
    marginBottom: 10,
    top:-10,
  },
  btn: {
    backgroundColor: "red",
    marginHorizontal: 30,
    paddingVertical: 10,
    marginBottom: 40,
    top: 50,
  },

  btnTxt: {
    alignSelf: "center",
    fontSize: 20,
    color: "white",
    alignItems: "center",
  },


  
});