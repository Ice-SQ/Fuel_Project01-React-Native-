import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Router = createNativeStackNavigator();
import Login from '../screens/login';
import Register from '../screens/register';
import PwReset from '../screens/forgetpassword';
import Main from '../screens/main';
import Fuel from '../screens/fuel';
import Petrol from '../screens/petrol';
import Map from '../screens/map';
import Map2 from '../screens/map2';
import Notification from '../screens/notification';

export default function Page() {
    return(
    <NavigationContainer>
      <Router.Navigator>
        <Router.Screen options={{headerShown: false}} name="login" component={Login} />
        <Router.Screen options={{headerShown: false}} name="main" component={Main} />
        <Router.Screen options={{headerShown: false}} name="register" component={Register} />
        <Router.Screen options={{headerShown: false}} name="pwreset" component={PwReset} />
        <Router.Screen options={{headerShown: false}} name="fuel" component={Fuel} />
        <Router.Screen options={{headerShown: false}} name="petrol" component={Petrol} />
        <Router.Screen options={{headerShown: false}} name="map" component={Map} />
        <Router.Screen options={{headerShown: false}} name="map2" component={Map2} />
        <Router.Screen options={{headerShown: false}} name="notification" component={Notification} />
        
      </Router.Navigator>
    </NavigationContainer>
    )
};

