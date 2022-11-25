import * as React from 'react';
import { View, Text, Button, SafeAreaView, StyleSheet } from 'react-native';
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
            <Text style={styles.headers}>
                Tags
            </Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    profileContainer: {
        flex: 1, 
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
    }
});

export default ProfileScreen