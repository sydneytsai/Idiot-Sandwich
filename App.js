import React, { useEffect, useState } from 'react'
import MainContainer from './navigation/MainContainer';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {decode, encode} from 'base-64'
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }

import LoginScreen from './navigation/screens/LoginScreen';
import RegistrationScreen from './navigation/screens/RegistrationScreen';

const Stack = createStackNavigator();

function App() {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)
  return (
    <NavigationContainer>
      <Stack.Navigator>
        { user ? (
          <Stack.Screen name="MainContainer">
            {props => <MainContainer {...props} extraData={user} />}
          </Stack.Screen>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Registration" component={RegistrationScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
