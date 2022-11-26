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
                <Pressable style={styles.filterButtons} onPress={() => alert('Ingredients')}>
                    <Text>
                        Breakfast
                    </Text>
                </Pressable>
                <Pressable style={styles.filterButtons} onPress={() => alert('Ingredients')}>
                    <Text>
                        Lunch
                    </Text>
                </Pressable>
                <Pressable style={styles.filterButtons} onPress={() => alert('Ingredients')}>
                    <Text>
                        Dinner
                    </Text>
                </Pressable>
                <Pressable style={styles.filterButtons} onPress={() => alert('Ingredients')}>
                    <Text>
                        Beverages
                    </Text>
                </Pressable>
            </ScrollView>
            <ScrollView style={styles.recipiesScrollView} contentContainer={styles.recipiesContentContainer}>
                <View style={styles.recipeCard}>
                    <View style={styles.recipeDescriptionContainer}>
                        <Text>
                            Grilled Cheese
                        </Text>
                        <Text>
                            Time: 10 minutes
                        </Text>
                        <Text>
                            Difficulty: 1
                        </Text>
                        <Text>
                            3 Ingredients
                        </Text>
                    </View>
                </View>
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
        marginTop: 10,
        margin: 5,
        paddingHorizontal: 10,
        paddingVertical: 5, 
        borderRadius: 25,
        width: 100,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        shadowOpacity: 5,
        shadowColor: "lightgrey",
        shadowOffset: { width: 1, height: 2 },
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
    recipeCard: {
        display: "flex",
        flexDirection: "row",
        height: '150%',
        width: '100%',
        alignSelf: "center", 
        justifyContent: "center", 
        borderWidth: 3,
        alignItems: "center",
    },
    recipeDescriptionContainer: {
        display: "flex",
        flexDirection: "column",
        alignSelf: "center", 
        justifyContent: "center",
        alignItems: "left",
    }
});

export default HomeScreen