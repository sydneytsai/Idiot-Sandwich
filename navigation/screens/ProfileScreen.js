import * as React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { ScrollView, View } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

function ProfileScreen({navigation}) {
    return (
        <SafeAreaView style={styles.profileContainer}>
            <Text style={styles.name}>
                Jane Doe
            </Text>
            <Text style={styles.headers}>
                Saved
            </Text>
            <ScrollView style={styles.collectionScrollView}>

            </ScrollView>
            <Text style={styles.headers}>
                Tags
            </Text>
            <ScrollView horizontal={true} style={styles.tagsScrollView} contentContainerStyle={styles.contentContainer}>
                <Text style={styles.tags}> Ingredients </Text>
            </ScrollView>
            <Text style={styles.headers}>
                Following
            </Text>
            <ScrollView style={styles.followingScrollView}>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    profileContainer: {
        flexDirection: "column", 
    },
    name: {
        fontSize: 20,
        fontWeight: "bold", 
        color: "white",
        backgroundColor: "#75975e",
        paddingVertical: '18%',
        paddingHorizontal: "38%",
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
        width: 10,
        backgroundColor: 'lightgrey',
    },
    tagsScrollView: {
        height: "15%",
        width: '90%',
        alignSelf: 'center',
    },
    contentContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    tags: {
        backgroundColor:"lightgrey",
        paddingHorizontal: 10,
        paddingVertical: 5,
        width: 100,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        shadowOpacity: 5,
        shadowColor: "lightgrey",
        shadowOffset: { width: 1, height: 2 },
    },
    followingScrollView: {
        height: "10%",
        width: '90%',
        alignSelf: 'center',
    },
});

export default ProfileScreen