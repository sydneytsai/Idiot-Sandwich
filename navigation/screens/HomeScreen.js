import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, ScrollView } from 'react-native';

function HomeScreen({navigation}) {
    return (
        <View>
            <ScrollView horizontal={true} style={styles.filterScrollView} contentContainer={styles.filterContentContainer}>
                <Pressable style={styles.filterButtons} onPress={() => alert('Diet')}>
                    <Text>
                        Diet
                    </Text>
                </Pressable>
                <Pressable style={styles.filterButtons} onPress={() => alert('Cuisine')}>
                    <Text>
                        Cuisine
                    </Text>
                </Pressable>
                <Pressable style={styles.filterButtons} onPress={() => alert('Ingredients')}>
                    <Text>
                        Ingredients
                    </Text>
                </Pressable>
            </ScrollView>
            <ScrollView style={styles.recipiesScrollView} contentContainer={styles.recipiesContentContainer}>
                <Text>
                    Grilled Cheese
                </Text>
                <Text>
                    Grilled Cheese
                </Text>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    filterScrollView: {
        height: '1%',
        width: '90%',
        alignSelf: 'center',
    },
    filterContentContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    filterButtons: {
        backgroundColor:"lightgrey", 
        margin: 10,
        paddingHorizontal: 10,
        paddingVertical: 5, 
        borderRadius: 25,
        width: 100,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
    },
    recipiesScrollView: {
        height: '80%',
        width: '90%',
        alignSelf: 'center',
    },
    recipiesContentContainer: {
        justifyContent: 'center',
        alignItems: 'center', 
    },
});

export default HomeScreen