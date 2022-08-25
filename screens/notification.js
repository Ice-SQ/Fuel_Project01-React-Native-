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

export default function Notification() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.Tmain}>Notifications</Text>

      <Text style={styles.labal}>01) New petrol truck arrive navinna fuel station at 830 PM</Text>
      <Text style={styles.labal}>02) New Disel truck arrive Maharafuel station at 1230 AM</Text>
      <Text style={styles.labal}>03) You Have one Update </Text>
      <Text style={styles.labal}>04) Please check petrol section</Text>
      <Text style={styles.labal}>05) Octaine 92 petrol available at navinna station</Text>
      <Text style={styles.labal}>06) Octaine 93 available at biyagama</Text>
      <Text style={styles.labal}>07) Your profile has been created</Text>
      <Text style={styles.labal}>08) Your information updated</Text>
      <Text style={styles.labal}>09) Welcome to our app</Text>
      <Text style={styles.labal}>10) Fuel app install success</Text>
      

      

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
});