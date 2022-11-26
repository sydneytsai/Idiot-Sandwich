import * as React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

function ProfileScreen({navigation}) {
    return (
        <SafeAreaView style={styles.profileContainer}>
            <Ionicons name="settings-outline" style={styles.settingsIcon}>
            </Ionicons>
            <Text style={styles.headers}>
                Jane Doe
            </Text>
            <Text style={styles.headers}>
                Collection
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
        alignItems: 'center', 
    },
    headers: {
        fontSize: 20,
        fontWeight: "bold",
    },
    settingsIcon: {
        size: 40,
        color: "lightgrey",
    },
    collectionScrollView: {
        height: "35%",
        width: '90%',
        alignSelf: 'center',
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
        marginTop: 10,
        margin: 5,
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