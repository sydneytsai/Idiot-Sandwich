import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {decode, encode} from 'base-64'
import { firebase } from './src/firebase/config'

import MainContainer from './navigation/MainContainer';
import LoginScreen from './navigation/screens/LoginScreen';
import RegistrationScreen from './navigation/screens/RegistrationScreen';

if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }

const Stack = createStackNavigator();

function App() {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)
  if (loading) {	
    return (	
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="HomeActivity"
          screenOptions={{headerShown: false}}
        >
          
          { user ? (
            <Stack.Screen name="MainContainer">
              {props => <MainContainer {...props} extraData={user} />}
            </Stack.Screen>
          ) : (
            <>
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Registration" component={RegistrationScreen} />
              <Stack.Screen name="MainContainer" component={MainContainer} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    )	
  }
  useEffect(() => {
    const usersRef = firebase.firestore().collection('users');
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data()
            setLoading(false)
            setUser(userData)
          })
          .catch((error) => {
            setLoading(false)
          });
      } else {
        setLoading(false)
      }
    });
  }, []);
}

export default App;
