import * as React from 'react';
import { View, Text, Button} from 'react-native';

export default function HomeScreen({navigation}) {
    return (
        <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row'}}>
            <Button
                onPress={() => alert('Vegetarian')} 
                title="Vegetarian">
            </Button>
            <Button 
                onPress={() => alert('Cuisine')} 
                title="Cuisine">
            </Button>
        </View>
    );
}