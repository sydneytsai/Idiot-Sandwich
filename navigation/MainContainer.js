import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import HomeScreen from './screens/HomeScreen';
import AddScreen from './screens/AddScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShareScreen from './screens/ShareScreen';
import VideoScreen from './screens/VideoScreen';

//Screen names
const homeName = "Home";
const addName = "Add Recipe";
const profileName = "Profile";
const shareName = "Share";
const videoName = "Videos";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainContainer() {

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === addName) {
              iconName = focused ? 'md-add-circle' : 'md-add-circle-outline';

            } else if (rn === profileName) {
              iconName = focused ? 'md-person' : 'md-person-outline';

            } else if (rn === shareName) {
              iconName = focused ? 'share-social' : 'share-social-outline';

            } else if (rn === videoName) {
              iconName = focused ? 'camera' : 'camera-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#75975e',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>

        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={videoName} component={VideoScreen} />
        <Tab.Screen name={addName} component={AddScreen} />
        <Tab.Screen name={shareName} component={ShareScreen} />
        <Tab.Screen name={profileName} component={ProfileScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screenName: {
    fontSize: 60,
  }
});

export default MainContainer;