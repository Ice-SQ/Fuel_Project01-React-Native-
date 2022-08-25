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

export default function Map() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.Tmain}>Live Map</Text>

      <Image source={require("../assets/fuel.jpg")} style={styles.img} />

      <Text style={styles.txt}>
        <Text>Petrol, </Text>
        <Text> Octaine 92,</Text>
        <Text> Nearest Station Navinna 1.5 KM,</Text>
        <Text> Petrol,</Text>
        <Text> Octaine 95,</Text>
        <Text> Nearest Station Magaragama 2.5 KM.</Text>

      </Text>
      <TouchableOpacity
          style={styles.btn}>
          <Text style={styles.btnTxt}>Directions</Text>
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
    height: 300,
    width: 400,
    alignSelf: "center",
    marginBottom: 10,
    top:-10,
  },
  txt:{
    fontSize: 24,
    textAlign: "left",
    marginTop: 20,
    marginBottom: 50,
    fontWeight: "500",
    color:"black",
  },
  btn: {
    backgroundColor: "red",
    marginHorizontal: 150,
    paddingVertical: 10,
    marginBottom: 40,
    top: -30,
    borderRadius: 10,
  },
  btnTxt: {
    alignSelf: "center",
    fontSize: 20,
    color: "white",
    alignItems: "center",
  },
});