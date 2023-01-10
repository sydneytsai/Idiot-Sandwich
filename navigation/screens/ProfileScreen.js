import React, { useEffect, useState } from 'react'
import { Text, SafeAreaView, StyleSheet, Image } from 'react-native';
import { ScrollView, View } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { firebase } from '../../src/firebase/config'


function ProfileScreen(props) {
    return (
        <SafeAreaView style={styles.profileContainer}>
            <SafeAreaView style={styles.top}>
                <Image style={styles.image} source={require('../../assets/images/grilledcheese.jpeg')} />
                <Text style={styles.name}>
                    Jane Doe
                </Text>
            </SafeAreaView>
            <Text style={styles.headers}>
                Saved
            </Text>
            <ScrollView horizontal={true} style={styles.collectionScrollView}>
                <Image style={styles.collection} source={require('../../assets/images/grilledcheese.jpeg')} />
                <Image style={styles.collection} source={require('../../assets/images/grilledcheese.jpeg')} />
                <Image style={styles.collection} source={require('../../assets/images/grilledcheese.jpeg')} />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    top: {
        backgroundColor: "#75975e",
        height: "45%",
        justifyContent: "center",
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 100,
        alignSelf: "center",
    },
    profileContainer: {
        flexDirection: "column", 
    },
    name: {
        fontSize: 25,
        fontWeight: "bold", 
        color: "white",
        alignSelf: "center",
        marginTop: 20,
    },
    headers: {
        fontSize: 20,
        fontWeight: "bold",
        margin: 10,
    },
    settingsIcon: {
        size: 40,
        color: "lightgrey",
    },
    collectionScrollView: {
        height: "25%",
        width: '90%',
        alignSelf: 'center',
    },
    collection: {
        width: 150,
        height: 170,
        borderRadius: 10,
        marginRight: 20,
    },
    contentContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ProfileScreen