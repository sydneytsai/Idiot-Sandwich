import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({navigation}) {
    return (
        <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row'}}>
            <Button
                onPress={() => alert('Vegetarian')} 
                title="Diet">
            </Button>
            <Button 
                onPress={() => alert('Cuisine')} 
                title="Cuisine">
            </Button>
            <Button 
                onPress={() => alert('Cuisine')} 
                title="Ingredient">
            </Button>
        </View>
    );
}