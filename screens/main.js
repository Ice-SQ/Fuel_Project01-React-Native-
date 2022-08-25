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

export default function Main() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.Tmain}>Home</Text>

      <Image source={require("../assets/logo.jpg")} style={styles.img} />

      <TouchableOpacity
          style={styles.btn}
          onPress={() => {navigation.navigate("fuel");}}>
          <Text style={styles.btnTxt}>Fuel</Text>
        </TouchableOpacity>
     
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {navigation.navigate("map");}}>
          <Text style={styles.btnTxt}>Live Queue Map</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => {navigation.navigate("notification");}}>
          <Text style={styles.btnTxt}>Notification</Text>
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
  img: {
    height: 200,
    width: 200,
    alignSelf: "center",
    marginBottom: 10,
    top:-10,
  },


  
});