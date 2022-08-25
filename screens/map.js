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
      <Text style={styles.Tmain}>Map</Text>

      <Image source={require("../assets/logo.jpg")} style={styles.img} />

    <Text style={styles.labal}>Type Of Fuel</Text>

<TextInput style={styles.txtInput} />

<Text style={styles.labal}>District</Text>

<TextInput style={styles.txtInput} />
<Text style={styles.labal}>City Or Town</Text>

<TextInput style={styles.txtInput} />

<TouchableOpacity
          style={styles.btn}
          onPress={() => {navigation.navigate("map2");}}>
          <Text style={styles.btnTxt}>Search</Text>
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
    top:-20,
      

  },

  img: {
    height: 100,
    width: 100,
    alignSelf: "center",
    marginBottom: 10,
    top:-50,
  },
  btn: {
    backgroundColor: "red",
    marginHorizontal: 160,
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
  labal: {
    backgroundColor: "#cacce5",
    padding: 15,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 5,
    top: -50,
  },
  txtInput: {
    backgroundColor: "pink",
    padding: 15,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 5,
    top: -50,
  },


  
});